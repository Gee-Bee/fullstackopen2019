import React from 'react';

const Filter =  ({ value, setValue }) => (
  <div>
    filter shown with <input value={value} onChange={(e) => setValue(e.target.value)}></input>
  </div>
);

export default Filter;