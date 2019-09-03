import React from 'react';

import personsService from '../services/persons';
import Person from './Person';

const Persons = ({ persons, setPersons, filterValue }) => {
  const personsToShow = persons.filter(person => (
    person.name.toLocaleLowerCase()
      .includes(filterValue.toLocaleLowerCase())
  ));

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`))
      personsService
        .destroy(person.id)
        .then(() => {
          setPersons(
            persons.filter(p => p.id !== person.id )
          )
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