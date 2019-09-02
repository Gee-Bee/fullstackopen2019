import React from 'react';
import axios from 'axios';

import Note from './Note';

const Notes = ({ notes, setNotes, showAll }) => {
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important);

  const toggleImportance = id => {
    const note = notes.find(note => id === note.id);
    const changedNote = {
      ...note,
      important: !note.important,
    }
    axios
      .put(`http://localhost:3001/notes/${id}`, changedNote)
      .then(response =>
        setNotes(notes.map(note => note.id === id ? response.data : note))
      )
  }

  const rows = () => notesToShow.map(note =>
    <Note
      key={note.id}
      note={note}
      toggleImportance={() => toggleImportance(note.id)}
    />
  )
  return (
    <ul>
      {rows()}
    </ul>
  )
}

export default Notes;