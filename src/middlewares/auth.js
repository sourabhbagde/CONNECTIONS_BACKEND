const authAdmin = (req, res) => {
    console.log("Admin authentication middleware");
    const token = "dummy-token";
    const isAuthenticated = token === "dummy-token";
    if (!isAuthenticated) {
        res.status(401).send("Unauthorized Admin request");
    } else {
        res.send("Welcome Admin!");
    }
}

const authUser = (req, res) => {
    console.log("User authentication middleware");
    const token = "dummy-token";
    const isAuthenticated = token === "dummy-token";
    if(!isAuthenticated) {
        res.status(401).send("Unauthorized User request");
    } else {
        res.send("Welcome User!");
    }
}

module.exports = {
    authAdmin,
    authUser
}