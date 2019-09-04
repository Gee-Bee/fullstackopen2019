import React, { useState, useEffect } from 'react';

import personsService from './services/persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filterValue, setFilterValue ] = useState('');
  const [ message, setMessage ] = useState();

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => setPersons(initialPersons));
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter value={filterValue} setValue={setFilterValue} />
      <h2>add a new</h2>
      <PersonForm
        persons={persons} setPersons={setPersons}
        newName={newName} setNewName={setNewName}
        newNumber={newNumber} setNewNumber={setNewNumber}
        setMessage={setMessage}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons} setPersons={setPersons}
        filterValue={filterValue}
      />
    </div>
  )
}

export default App