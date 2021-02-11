// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

let rawdata = fs.readFileSync("./db/db.json");
let db = JSON.parse(rawdata);

// Sets up the Express App
const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// GET /notes should return the notes.html file
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// GET * should return the index.html file.
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", (req, res) => res.json(db));

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
app.post("/api/notes", (req, res) => {
  const newNote = req.body;
});

// find a way to give each note a unique id when it's saved

// app.get("*", (req, res) => {
//   res.send("Charlie is the cooliest");
// });

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
