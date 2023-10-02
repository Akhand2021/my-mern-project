const Note = require("../models/note");

const fetchNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json({ note });
};

const fetchNotes = async (req, res) => {
    const notes = await Note.find();
    res.json({ notes });
};

const createNote = async (req, res) => {
    const { title, body } = req.body;
    const note = await Note.create({ title, body });
    res.json({ note });
};

const updateNote = async (req, res) => {
    const { title, body } = req.body;
    const note = await Note.findByIdAndUpdate(req.params.id, { title, body });
    res.json({ note });
};

const deleteNote = async (req, res) => {
    await Note.deleteOne({ _id: req.params.id });
    res.json({ success: "Record deleted.." });
};

module.exports = {
    fetchNotes,
    fetchNote,
    createNote,
    updateNote,
    deleteNote
};
