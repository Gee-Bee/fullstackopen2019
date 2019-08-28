import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  }
  const totalValue = part1.exercises + part2.exercises + part3.exercises;

  return (
    <div>
      <Header text={course} />
      <Content part1={part1}
               part2={part2}
               part3={part3} />
      <Total text="Number of excercises" value={totalValue} />
    </div>
  )
}

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Content = (props) => {
  const { part1, part2, part3 } = props;
  return (
    <>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </>
  );
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