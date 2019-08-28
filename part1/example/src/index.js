import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [ counter, setCounter ] = useState(0);

  const setValue = value => () => setCounter(value);

  return (
    <div>
      {counter}
      <button onClick={setValue(counter + 1)}>
        plus
      </button>
      <button onClick={setValue(0)}>
        zero
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);