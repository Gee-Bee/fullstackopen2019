import React from 'react';

const Countries = ({countries, setCountry}) => {
  return countries.map((country) => (
    <div key={country.numericCode}>
      {country.name}
      <button onClick={() => setCountry(country)}>show</button>
    </div>
  ));
}

export default Countries;