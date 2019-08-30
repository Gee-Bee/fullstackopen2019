import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = ({ course }) => (
  <>
    <Header text={course.name} />
    <Content parts={course.parts} />
    <Total text="Number of excercises" parts={course.parts} />
  </>
)

const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Content = ({ parts }) => {
  return parts.map(part => (
    <Part key={part.id}
          name={part.name}
          exercises={part.exercises} />
  ));
}

const Part = ({ name, exercises }) => (
  <p>{name} {exercises}</p>
)

const Total = ({ text, parts }) => {
  const totalExercises = parts
    .map(a => a.exercises)
    .reduce((a,b) => a + b, 0);

  return (
    <p>
      {text} {totalExercises}
    </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));