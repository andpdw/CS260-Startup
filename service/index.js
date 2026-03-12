const express = require("express");

const app = express();

let users = [
    { username: "admin", password: "adminpass", admin: true},
    { username: "normal", password: "pass", admin: false}];
let entriest = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.post("/auth/login", async (req, res) => {
    const user = await findUser("username", req.body.username);

    if (user) {
        if (req.body.password === user.password) {
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

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});