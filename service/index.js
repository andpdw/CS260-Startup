const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = "Token";


async function setPasswords(users) {
    const adminPasswordHash = await bcrypt.hash("adminpass", 10);
    const passwordHash = await bcrypt.hash("pass", 10);

    users[0].password = adminPasswordHash;
    users[1].password = passwordHash;
}

let users = [
    { username: "admin", password: "", admin: true},
    { username: "normal", password: "", admin: false}];

let messages = [
    {name: "Clayton", message: "And I just got back"},
    {name: "Andrew", message: "I can set up your password in an hour"},
    {name: "Jacob", message: "This is a real message"},
    {name: "Jeffery", message: "I will be gone for the next 3 hours."},
    {name: "Carter", message: "I just need to rant for a really long time so I can see how the screen handle text that will wrap around the edge of the screen"},
    {name: "Clayton", message: "I will be gone for the next 2 hours."},
    {name: "Clayton", message: "And I just got back"},
    {name: "Andrew", message: "I can set up your password in an hour"},
    {name: "Carter", message: "I just need to rant for a really long time so I can see how the screen handle text that will wrap around the edge of the screen"},
    {name: "Clayton", message: "I will be gone for the next 2 hours."}
];

let database = [
    {date:"01/25/26", time:"5:32", name:"Andrew", state:"Leaving", guests:"No"},
    {date:"01/25/26", time:"5:39", name:"Jacob", state:"Entering", guests:"No"},
    {date:"01/25/26", time:"5:59", name:"Clayton", state:"Leaving", guests:"No"},
    {date:"01/25/26", time:"6:45", name:"Andrew", state:"Entering", guests:"Yes"},
];

setPasswords(users);

const port = process.argv.length > 2 ? process.argv[2] : 3000;

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
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

async function findUser(field, value) {
    if (!value) return null;

    return users.find((u) => u[field] === value);
}

async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
        username: username,
        password: passwordHash,
    };

    users.push(user);

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

function updateMessages(newMessage) {
    messages.unshift(newMessage);
    return messages;
}

function updateDatabase(entry) {
    database.unshift(entry);
    return database;
}

apiRouter.get("/message", verifyAuth, (_req, res) => {
    if (messages.length > 10) {
        res.send(messages.slice(0, 10));
    } else {
        res.send(messages);
    }
})

apiRouter.post("/message", verifyAuth, (req, res) => {
    messages = updateMessages(req.body);
    if (messages.length > 10) {
        res.send(messages.slice(0, 10));
    } else {
        res.send(messages);
    }
})

apiRouter.get("/database", verifyAuth, (_req, res) => {
    if (database.length > 20) {
        res.send(database.slice(0, 20));
    } else {
        res.send(database);
    }
})

apiRouter.post("/database", verifyAuth, (req, res) => {
    database = updateDatabase(req.body);
    if (database.length > 20) {
        res.send(database.slice(0, 20));
    } else {
        res.send(database);
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