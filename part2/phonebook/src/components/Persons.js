import React from 'react';

import Person from './Person';

const Persons = ({ persons, filterValue }) => {
  const personsToShow = persons.filter(person => (
    person.name.toLocaleLowerCase()
      .includes(filterValue.toLocaleLowerCase())
  ));

  return personsToShow.map(person =>
    <Person key={person.name} person={person} />
  )
};

export default Persons;