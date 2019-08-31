import React from 'react';

import Note from './Note';

const Notes = ({ notes, showAll }) => {
  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important);

  const rows = () => notesToShow.map(note =>
    <Note
      key={note.id}
      note={note}
    />
  )
  return (
    <ul>
      {rows()}
    </ul>
  )
}

export default Notes;