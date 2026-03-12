const cookieParser = require("cookie-parser");
const express = require("express");
const uuid = require("uuid");

const authCookieName = "Token";

const app = express();

let users = [
    { username: "admin", password: "adminpass", admin: true, token: ""},
    { username: "normal", password: "pass", admin: false, token: ""}];
let entriest = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.post("/auth/login", async (req, res) => {
    const user = await findUser("username", req.body.username);

    if (user) {
        if (req.body.password === user.password) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({username: user.username, admin: user.admin});
            return;
        }
    }
    res.status(401).send({msg: "Unauthorized" });
});

apiRouter.post("/auth/create", async (req, res) => {
    if (await findUser("username", req.body.username)) {
        res.status(409).send({msg: "Existing user"});
    } else {
        const user = await createUser(req.body.username, req.body.password);

        setAuthCookie(res, user.token);
        res.status(201).send({username: req.body.username});
    }
});

async function findUser(field, value) {
    if (!value) return null;

    return users.find((u) => u[field] === value);
}

async function createUser(username, password) {
    const user = {
        username: username,
        password: password,
        token: 0,
    };

    users.push(user);

    return user;
}

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        security: true,
        httpOnly: true,
        sameSite: "strict",
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});