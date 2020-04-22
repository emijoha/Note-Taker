// dependencies
var path = require("path");

// export HTML routing
module.exports = app => {
    // HTML GET Requests, handles page visits
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // If no matching route is found default to home
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};