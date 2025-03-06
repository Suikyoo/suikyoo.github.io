const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

const uri = process.env.ATLAS_URI || "";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

const connectClient = async () => {
    await client.connect();

}


const db = client.db("message-app");

module.exports.accounts = db.collection("accounts"); 
module.exports.connectClient = connectClient;
