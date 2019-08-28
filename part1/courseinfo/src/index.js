import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];
  const totalValue = parts
    .map(a => a.exercises)
    .reduce((a, b) => (a + b), 0);

  return (
    <>
      <Header text={course} />
      <Content parts={parts} />
      <Total text="Number of excercises" value={totalValue} />
    </>
  )
}

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Content = ({ parts: [ part1, part2, part3 ] }) => {
  // const [ part1, part2, part3 ] = props.parts;
  return [ part1, part2, part3].map(part => (
    <Part key={part.name}
          name={part.name}
          exercises={part.exercises} />
  ));
}

const Part = ({ name, exercises }) => (
  <p>{name} {exercises}</p>
)

const Total = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
)

ReactDOM.render(<App />, document.getElementById('root'))