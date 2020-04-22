// load data
const noteData = require("../db/db.json");

// export API routing
module.exports = app => {
  // API GET Requests, to access all saved notes
  app.get("/api/notes", (req, res) => {
    res.json(noteData);
  });

  // API POST Requests, to save data sent to server
  app.post("/api/notes", (req, res) => {
    noteData.push(req.body);
    console.log("Note saved!");
  });

  //  API DELETE Request, to delete a note 
};
