import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  const header = <h1>statistics</h1>;
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        {header}
        <div>No feedback given</div>
      </>
    )
  }
  const all = good + neutral + bad;
  const average = (good * 1 + bad * -1) / all;
  const positive = good / all * 100;
  return (
    <>
      {header}
      <table>
        <tbody>
          <Statistic name="good" value={good} />
          <Statistic name="neutral" value={neutral} />
          <Statistic name="bad" value={bad} />
          <Statistic name="all" value={all} />
          <Statistic name="average" value={average} />
          <Statistic name="positive" value={`${positive} %`} />
        </tbody>
      </table>
    </>
  )
};

const Statistic = ({ name, value}) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
)

ReactDOM.render(<App />,
  document.getElementById('root')
);