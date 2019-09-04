import React from 'react';

import personsService from '../services/persons';
import Person from './Person';

const Persons = ({ persons, setPersons, filterValue, setNotification }) => {
  const personsToShow = persons.filter(person => (
    person.name.toLocaleLowerCase()
      .includes(filterValue.toLocaleLowerCase())
  ));

  const displayMessage = (msg, type) => {
    const notification = {
      message: msg
    }
    if (type)
      notification.type = type
    setNotification(notification);
    setTimeout(() => setNotification(null), 5000);
  }

  const removePerson = (id) => {
    setPersons(
      persons.filter(p => p.id !== id )
    )
  }

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`))
      personsService
        .destroy(person.id)
        .then(() => {
          removePerson(person.id);
          displayMessage(`Removed ${person.name}`);
        })
        .catch(() => {
          removePerson(person.id);
          displayMessage(`Information of ${person.name} has already been removed from server`, 'error');
        })
  }

  return personsToShow.map(person =>
    <Person
      key={person.name}
      person={person}
      deletePerson={() => deletePerson(person)}
    />
  )
};

export default Persons;