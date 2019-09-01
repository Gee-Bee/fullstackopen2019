import React from 'react';

const Countries = ({countries}) => {
  return countries.map((country) => (
    <div key={country.numericCode}>{country.name}</div>
  ));
}

export default Countries;