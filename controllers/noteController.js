const Note = require('../models/Note');

// Get all notes
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new note
exports.createNote = async (req, res) => {
  try {
    // Destructure from req.body
const { title, content } = req.body;

// Basic validation
if (!title || !content) {
  return res.status(400).json({ error: 'Both title and content are required.' });
}

    const newNote = new Note(req.body);
    const saved = await newNote.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a note
exports.updateNote = async (req, res) => {
  try {
    const updated = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

