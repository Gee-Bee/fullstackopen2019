import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ToggleAll from './components/ToggleAll';
import Notes from './components/Notes';
import NoteForm from './components/NoteForm';

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then(({ data }) => setNotes(data))
  }, [])

  return (
    <div>
      <h1>Notes</h1>
      <ToggleAll showAll={showAll} setShowAll={setShowAll} />
      <Notes notes={notes} setNotes={setNotes} showAll={showAll} />
      <NoteForm notes={notes} setNotes={setNotes}
        newNote={newNote} setNewNote={setNewNote}
      />
    </div>
  )
}

export default App;