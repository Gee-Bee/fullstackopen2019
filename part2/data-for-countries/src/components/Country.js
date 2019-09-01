import React from 'react';

import Weather from './Weather';

const Country = ({ country }) => {
  const languages = country.languages.map((lang) => (
    <li key={lang.iso639_1}>{lang.name}</li>
  ));
  return (
    <>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h2>languages</h2>
      <ul>{languages}</ul>
      <img src={country.flag} alt="flag" width="150px" />
      <Weather q={country.name} />
    </>
  );
};

export default Country;