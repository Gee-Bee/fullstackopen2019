import React from 'react';

const Filter = ({ value, setValue }) => {
  return (
    <div>
      find countries <input value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  );
};

export default Filter;