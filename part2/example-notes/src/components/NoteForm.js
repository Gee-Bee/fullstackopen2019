import React from 'react';

import notesService from '../services/notes';

const NoteForm = ({
  notes, setNotes,
  newNote, setNewNote
}) => {
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    };
    notesService
      .create(noteObject)
      .then((newNote) => {
        setNotes(notes.concat(newNote))
        setNewNote('');
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  return (
    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange} />
      <button type="submit">save</button>
    </form>
  )
};

export default NoteForm;