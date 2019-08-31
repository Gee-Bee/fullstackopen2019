import React from 'react';

const NoteForm = ({
  notes, setNotes,
  newNote, setNewNote
}) => {
  const addNote = (event) => {
    event.preventDefault();
    console.log('button clicked', event.target);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject));
    setNewNote('');
  }

  const handleNoteChange = (event) => {
    console.log('input changed', event.target.value, newNote);
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