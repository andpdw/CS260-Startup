const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require("./database.js");

const authCookieName = "Token";
const apiKey = process.env.WEATHERSTACK_API_KEY;

let database = [
    {date:"01/25/26", time:"5:32", name:"Andrew", state:"Leaving", guests:"No"},
    {date:"01/25/26", time:"5:39", name:"Jacob", state:"Entering", guests:"No"},
    {date:"01/25/26", time:"5:59", name:"Clayton", state:"Leaving", guests:"No"},
    {date:"01/25/26", time:"6:45", name:"Andrew", state:"Entering", guests:"Yes"},
];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use("/api", apiRouter);

const verifyAuth = async (req, res, next) => {
    const user = await findUser("token", req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: "Unauthorized" });
    }
}

apiRouter.post("/auth/login", async (req, res) => {
    const user = await findUser("username", req.body.username);

    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            await DB.updateUser(user);
            setAuthCookie(res, user.token, user.admin);
            res.send({username: user.username, admin: user.admin});
            return;
        }
    }
    res.status(401).send({msg: "Unauthorized" });
});

apiRouter.post("/auth/create", verifyAuth, async (req, res) => {
    if (await findUser("username", req.body.username)) {
        res.status(409).send({msg: "Existing user"});
    } else {
        const user = await createUser(req.body.username, req.body.password);

        res.status(201).send({username: req.body.username});
    }
});

apiRouter.delete("/auth/logout", async (req, res) => {
    const user = await findUser("token", req.cookies[authCookieName]);
    if (user) {
        await DB.updateUserRemoveAuth(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

async function findUser(field, value) {
    if (!value) return null;

    if (field === "token") {
        return DB.getUserByToken(value);
    }

    return DB.getUser(value);
}

async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
        username: username,
        password: passwordHash,
    };

    await DB.addUser(user);

    return user;
}

function setAuthCookie(res, authToken, admin) {
    if (admin) {
        res.cookie(authCookieName, authToken, {
            maxAge: 1000 * 60,
            security: true,
            httpOnly: true,
            sameSite: "strict",
        });
    } else {
        res.cookie(authCookieName, authToken, {
            maxAge: 1000 * 60 * 60 * 24 * 365,
            security: true,
            httpOnly: true,
            sameSite: "strict",
        });
    }
}

async function sendMessage(newMessage) {
    await DB.sendMessage(newMessage);
}

async function updateDatabase(entry) {
    await DB.logEntry(entry);
}

apiRouter.get("/message", verifyAuth, async (_req, res) => {
    const messages = await DB.getMessages();
    res.send(messages);
})

apiRouter.post("/message", verifyAuth, (req, res) => {
    sendMessage(req.body);
    res.status(201).send();
})

apiRouter.get("/database", verifyAuth, async (_req, res) => {
    const entry = await DB.getEntry();
    res.send(entry);
})

apiRouter.post("/database", verifyAuth, (req, res) => {
    updateDatabase(req.body);
    res.status(201).send();
})

apiRouter.get("/weather", async (_req, res) => {

    if (!apiKey) {
        return res.status(500).send({ msg: "Missing WEATHERSTACK_API_KEY" });
    }

    try {
        const params = new URLSearchParams({
            access_key: apiKey,
            query: "Provo, Utah",
            units: "f",
        });

        const response = await fetch(`https://api.weatherstack.com/current?${params.toString()}`);
        const data = await response.json();

        if (data.error) {
            return res.status(502).send({ mesg: data.error.info || "Weather API failed" });
        }

        res.send({
            temp: data.current.temperature,
            rain: data.current.precip,
        });
    } catch (error) {
        res.status(500).send({ msg: "Failed to fetch weather data" });
    }
})

app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
    res.sendFile("index.html", {root: "public"});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
