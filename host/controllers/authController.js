
const brcypt = require('bcrypt');

const secretKey = 'petpeeve';

const users = [
    {
        username: "Suikyoo",
        password: bcrypt.hash("password", 8)
    }
];

const authenticateUser = async (username, password) => {

    const user = users.find( u => { u.username === username});

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send("Username or password invalid");
    }

    const token = jwt.sign({username: user.username}, secretKey, { expiresIn: '1h'});

    return res.status(200).send({token});

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
