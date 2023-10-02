// load environment
if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

// Import the 'http' module
const http = require('http');

const express = require('express');
const cors = require('cors');
const connctDB = require('./config/connectdb');
const NotesController = require('./controllers/NoteController');
// connect to the database
connctDB();

const app = express();

// Configaure express app

app.use(express.json());
app.use(cors());


// fetch all notes
app.get('/notes', NotesController.fetchNotes);
// Fetch single data
app.get('/notes/:id', NotesController.fetchNote);
// update note
app.put('/notes/:id', NotesController.updateNote);
// create notes
app.post('/notes', NotesController.createNote);

app.delete('/notes/:id', NotesController.deleteNote);
app.listen(4000);
// app.listen(process.env.PORT);
