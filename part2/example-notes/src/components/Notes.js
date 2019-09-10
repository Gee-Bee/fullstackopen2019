import React from 'react';

import notesService from '../services/notes';
import Note from './Note';

const Notes = ({ notes, setNotes, showAll, setErrorMsg }) => {
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important);

  const toggleImportance = id => {
    const note = notes.find(note => id === note.id);
    const changedNote = {
      ...note,
      important: !note.important,
    }
    notesService
      .update(id, changedNote)
      .then((returnedNote) =>
        setNotes(notes.map(note => note.id === id ? returnedNote : note))
      )
      .catch(() => {
        setErrorMsg(`Note '${note.content}' was already deleted from server`)
        setTimeout(() =>
          setErrorMsg(null)
        , 5000)
        setNotes(notes.filter(n => n.id !== id))
      })

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