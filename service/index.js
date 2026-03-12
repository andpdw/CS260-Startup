const express = require("express");

const app = express();

let users = [];
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
            res.send({username: user.username});
            return;
        }
    }
    res.status(401).send({msg: "Unauthorized" });
});

async function findUser(field, value) {
    if (!value) return null;

    return users.find((u) => u[field] === value);
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});