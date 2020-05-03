// load data
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../db/db.json");

// export API routing
module.exports = app => {
  // API GET Requests, to access all saved notes
    app.get("/api/notes", (req, res) => {

        // Returns all saved notes
        res.sendFile(dbPath);

    });

  // API POST Requests, to save data sent to server
    app.post("/api/notes", (req, res) => {

        // New note from request body
        const newNote = req.body;

        fs.readFile(dbPath, (err, data) => {
            if (err) throw err;

            // Data from file is parsed and stored in new variable
            // New note is pushed into noteData
            const noteData = JSON.parse(data);
            noteData.push(newNote);

            // Uses updated data to over-write db.json file
            fs.writeFile(dbPath, JSON.stringify(noteData), err => {
                if (err) throw err;
            });
        });

        // Returns the new note to the client.
        res.json(newNote);
    });

  // API DELETE Request, to delete a note
    app.delete("/api/notes/:id", (req, res) => {

        // Receives a query parameter containing the id of a note to delete. 
        const id = req.params.id;

        // Reads all notes from the `db.json` file
        fs.readFile(dbPath, (err, data) => {
            if (err) throw err;

            // Data from file is parsed and stored in new variable
            const noteData = JSON.parse(data);

            // Removes the note with the given `id` property
            // This is done by creating new variable that holds all notes EXCEPT that one with the given id
            const undeletedNotes = noteData.filter(note => note.id !== id);

            // Rewrites `db.json` file with updated note data
            fs.writeFile(dbPath, JSON.stringify(undeletedNotes), err => {
                if (err) throw err;
            });

        });

        // Returns updated file of all undeleted notes
        res.sendFile(dbPath);

    });

};
