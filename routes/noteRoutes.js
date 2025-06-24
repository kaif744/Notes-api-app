const express = require('express');
const router = express.Router();
const Note = require('../models/Note'); // ✅ MISSING LINE: Import the Note model

const {
  getNotes,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/noteController');

// ✅ GET all notes
router.get('/', getNotes);              // GET /api/notes

// ✅ POST a new note
router.post('/', createNote);           // POST /api/notes

// ✅ GET a single note by ID (moved above PUT/DELETE to avoid route conflicts)
router.get('/:id', async (req, res) => {
  console.log('🔎 Requested ID:', req.params.id);

  try {
    const note = await Note.findById(req.params.id);
    console.log('📝 Found Note:', note);

    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.json(note);
  } catch (error) {
    console.error('❌ Error:', error.message);
    res.status(500).json({ error: 'Server Error' });
  }
});

// ✅ PUT (update) a note by ID
router.put('/:id', updateNote);         // PUT /api/notes/:id

// ✅ DELETE a note by ID
router.delete('/:id', deleteNote);      // DELETE /api/notes/:id

module.exports = router;
