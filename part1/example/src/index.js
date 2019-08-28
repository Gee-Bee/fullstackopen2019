import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [ counter, setCounter ] = useState(0);

  const setValue = value => () => setCounter(value);

  return (
    <div>
      <Display counter={counter} />
      <Button text="plus"
        clickHandler={setValue(counter + 1)} />
      <Button text="minus"
        clickHandler={setValue(counter - 1)} />
      <Button text="zero"
        clickHandler={setValue(0)} />
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>
const Button = ({ text, clickHandler }) => (
  <button onClick={clickHandler}>
    {text}
  </button>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);