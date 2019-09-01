import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ q }) => {
  const [ data, setData ] = useState();

  useEffect(() => {
    const weatherURL = new URL('http://api.apixu.com/v1/current.json');
    weatherURL.searchParams.set('key', '10ff04ab679644a4b80193432190109');
    weatherURL.searchParams.set('q', q);
    axios
    .get(weatherURL)
    .then(response => {
      console.log(response.data);
      return setData(response.data);
    })
  }, [q]);

  if (!data) return null;

  return (
    <>
      <h2>Weather in {data.location.name}</h2>
      <div>
        <strong>temperature: </strong>
        {data.current.temp_c} Celcius
      </div>
      <img alt="condition-icon" src={data.current.condition.icon} />
      <div>
        <strong>wind: </strong>
        {data.current.wind_kph} kph direction {data.current.wind_dir}
      </div>
    </>
  );

};

export default Weather;