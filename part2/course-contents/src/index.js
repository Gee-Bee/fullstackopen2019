import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const courseElems = courses.map(course => (
    <Course key={course.id} course={course} />
  ));


  return (
    <div>
      <h1>Web development curriculum</h1>
      {courseElems}
    </div>
  )
}

const Course = ({ course }) => (
  <>
    <Header text={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
)

const Header = ({ text }) => (
  <h2>{text}</h2>
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

const Total = ({ parts }) => {
  const totalExercises = parts
    .map(a => a.exercises)
    .reduce((a,b) => a + b, 0);

  return (
    <h3>
      total of {totalExercises} exercises
    </h3>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));