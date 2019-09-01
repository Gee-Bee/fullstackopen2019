import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import Countries from './components/Countries';
import Country from './components/Country';

const App = () => {
  const [ country, setCountry ] = useState();
  const [ countries, setCountries ] = useState([]);
  const [ filterValue, setFilterValue ] = useState('');

  useEffect(() => {
    axios
      .get('./all_countries.json')
      .then((response) => response.data)
      .then((countries) => setCountries(countries))
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLocaleLowerCase().includes(
      filterValue.toLocaleLowerCase()
    )
  );
  const matchedCountry = ((filteredCountries.length === 1) && filteredCountries[0])
    || filteredCountries.find((country) =>
      country.name.toLocaleLowerCase() === filterValue.toLocaleLowerCase()
    );
  if (!country && matchedCountry) {
    setCountry(matchedCountry);
  }

  return (
    <>
      <Filter value={filterValue} setValue={setFilterValue} setCountry={setCountry}/>
      { filterValue.length > 0 &&
        (country
        ? <Country country={country} />
        : filteredCountries.length < 10
        ? <Countries countries={filteredCountries} setCountry={setCountry}/>
        : <div>Too many matches, specify another filter</div>)
      }
    </>
  );
};

export default App;