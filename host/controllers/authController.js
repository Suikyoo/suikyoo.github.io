

const users = [
    {
        username: "Suikyoo",
        password: "hash"
    }
]

const validateAuth = (req, res) => {
    const {username, password} = req.body;

    const user = users.find( u => { u.username === username});

    if (!user || user.password != password) {
        return res.status(401).send("Username or password invalid");
    }
    


}
