import React, { useState, useEffect } from 'react';

import noteService from './services/notes';
import ToggleAll from './components/ToggleAll';
import Notes from './components/Notes';
import NoteForm from './components/NoteForm';
import Notification from './components/Notification';
import Footer from './components/Footer';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    noteService
      .getAll()
      .then((initialNotes) => setNotes(initialNotes));
  }, [])

  return (
    <div>
      <h1 style={{color: 'blue'}}>Notes</h1>
      <Notification message={errorMsg} />
      <ToggleAll showAll={showAll} setShowAll={setShowAll} />
      <Notes
        notes={notes} setNotes={setNotes}
        showAll={showAll}
        setErrorMsg={setErrorMsg}
      />
      <NoteForm notes={notes} setNotes={setNotes}
        newNote={newNote} setNewNote={setNewNote}
      />
      <Footer />
    </div>
  )
}

export default App;