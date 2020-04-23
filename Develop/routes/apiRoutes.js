// load data
const noteData = require("../db/db.json");

// export API routing
module.exports = app => {
  // API GET Requests, to access all saved notes
  // Should read the `db.json` file and return all saved notes as JSON.
  app.get("/api/notes", (req, res) => {
   res.json(noteData);
  });

  // API POST Requests, to save data sent to server
  // Should receive a new note to save on the request body, 
  // add it to the `db.json` file, and then return the new note to the client.
  app.post("/api/notes", (req, res) => {
    noteData.push(req.body);
    console.log("Note saved!");
  });

  //  API DELETE Request, to delete a note 
  // Should receive a query parameter containing the id of a note to delete. 
  // This means you'll need to find a way to give each note a unique `id` when it's saved. 
  // In order to delete a note, you'll need to read all notes from the `db.json` file, 
  // remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
  app.delete("/api/notes", (req, res) => {
    
  })
};
