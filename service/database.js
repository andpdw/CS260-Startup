const { MongoClient } = require("mongodb");
const config = require("./dbConfig.json");

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db("startupDB");
const userCollection = db.collection("user");
const logCollection = db.collection("datalog");

(async function testConnection() {
    try {
        await db.command({ ping: 1});
        console.log("Connect to database");
    } catch (ex) {
        console.log(`Unable to connect to database with ${url} because ${ex.message}`);
        process.exit(1);
    }
})();

function getUser(username) {
    return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function updateUser(user) {
    await userCollection.updateOne({ username: user.username }, { $set: user });
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUserRemoveAuth(user) {
    await userCollection.updateOne({ username: user.username }, { $unset: { token: 1 }});
}

module.exports = {
    getUser,
    getUserByToken,
    updateUser,
    addUser,
    updateUserRemoveAuth,
};