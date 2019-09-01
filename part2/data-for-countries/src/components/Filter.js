import React from 'react';

const Filter = ({ value, setValue, setCountry }) => {
  const handleChange = (e) => {
    setCountry(null);
    setValue(e.target.value);
  }
  return (
    <div>
      find countries <input value={value} onChange={handleChange}/>
    </div>
  );
};

export default Filter;