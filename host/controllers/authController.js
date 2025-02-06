
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'petpeeve';

const users = [
    {
        username: "Alpha",
        password: ""
    },

    {
        username: "Beta",
        password: ""
    }
];

bcrypt.hash("password", 5, (err, hash) => {users[0].password = hash} );
bcrypt.hash("password", 5, (err, hash) => {users[1].password = hash} );

const authenticateUser = async (req, res) => {
    const {username, password} = req.body;

    const user = users.find( u => {return u.username === username});

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send("Username or password invalid");
    }

    const token = jwt.sign({username: user.username}, secretKey, { expiresIn: '1h'});

    res.status(200).send({token});

}

const verifyToken = (token) => {
    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).send("Invalid or expired token");
        }
        res.status(200).send("Token Verified");
    });

}

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send("Token Required");
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).send("Invalid or expired token");
        }
        req.user = user;
        next();
    });
}

module.exports = {authenticateUser, authMiddleware};
