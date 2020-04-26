// load data
let noteData = require("../db/db.json");
const fs = require("fs");
const path = require("path");

// export API routing
module.exports = app => {
  // API GET Requests, to access all saved notes
  // Should read the `db.json` file and return all saved notes as JSON.
  app.get("/api/notes", (req, res) => {
    // const dbPath = path.join(__dirname, "../db/db.json");

    // const noteData = fs.readFileSync(dbPath);

    // // const notes = JSON.stringify(noteData);

    res.json(noteData);
  });

  // API POST Requests, to save data sent to server
  // Should receive a new note to save on the request body, 
  // add it to the `db.json` file, and then return the new note to the client.
  app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    noteData.push(newNote);

    // const dbPath = path.join(__dirname, "../db/db.json");

    // fs.writeFile(dbPath, JSON.stringify(noteData), (err) => {
    //   if (err) throw err;
    // });

    res.json(newNote);
  });

  //  API DELETE Request, to delete a note 
  // Should receive a query parameter containing the id of a note to delete. 
  // This means you'll need to find a way to give each note a unique `id` when it's saved. 
  // In order to delete a note, you'll need to read all notes from the `db.json` file, 
  // remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    const undeletedNotes = noteData.filter(note => note.id !== id);

    // const dbPath = path.join(__dirname, "../db/db.json");

    // fs.writeFile(dbPath, JSON.stringify(undeletedNotes), (err) => {
    //   if (err) throw err;
    //   console.log('Note deleted!');
    // });

    res.json(undeletedNotes);
  });

};
