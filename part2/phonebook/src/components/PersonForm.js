import React from 'react';

import personsService from '../services/persons'

const personForm = ({
    persons, setPersons,
    newName, setNewName,
    newNumber, setNewNumber,
    setNotification
  }) => {

  const eraseForm = () => {
    setNewName('');
    setNewNumber('');
  }

  const displayMessage = (msg, type) => {
    const notification = {
      message: msg
    }
    if (type)
      notification.type = type
    setNotification(notification);
    setTimeout(() => setNotification(null), 5000);
  }

  const addPerson = (e) => {
    e.preventDefault();
    const existingPerson = persons.find(person => person.name === newName);
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    const errorHandler = (error) => {
      const errorMsg = error.response && error.response.data.error;
      if (errorMsg) {
        displayMessage(errorMsg, 'error')
      }
    }
    if (existingPerson) {
      const confirmMsg = `${newName} is already added to phonebook, replace the old number with a new one?`;
      if (window.confirm(confirmMsg)) {
        personsService
          .update(existingPerson.id, newPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person =>
              person.id === updatedPerson.id
              ? updatedPerson : person
            ))
            eraseForm();
            displayMessage(`Changed number for ${newPerson.name}`);
          })
          .catch(errorHandler);
      }
    } else {
      personsService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        eraseForm();
        displayMessage(`Added ${newPerson.name}`);
      })
      .catch(errorHandler);
    }
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default personForm;