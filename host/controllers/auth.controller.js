
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { accounts } = require('../../models/mongoClient.js');

require('dotenv').config();

const signUp = async (req, res) => {
    const {username, password} = req.body 
    const match = await accounts.findOne({username: username});


    if (match) {
        return res.status(400).send("Pick another username")
    }

    const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT_ROUNDS));


    const account_doc = {
        username: username,
        password: hashedPassword,
        status: 0,
        available: 50
        
    };

    const result = await accounts.insertOne(account_doc);


    res.status(200).send("User has been successfully registered");
}

const signIn = async (req, res) => {
    const {username, password} = req.body
    const match = await accounts.findOne({username});

    if (!match) {
        return res.status(401).send("Username or password invalid");
    }
    const result = await bcrypt.compare(password, match.password);

    if (!result) {
        return res.status(401).send("Username or password invalid")
    }
    const token = await jwt.sign({username: match.username}, process.env.JWT_SECRET_KEY, { expiresIn: '1h'});

    res.status(200).send({token});

}

const authorize = (req res, next) => {
    const authHeader = req.headers["Authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).send("Authorization token is required");
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
        if (err) {
            return res.status(403).send("Invalid or expired authorization token");
        }

        req.authData = data;

        next();
    });



}
module.exports = {signUp, signIn, authorize};
