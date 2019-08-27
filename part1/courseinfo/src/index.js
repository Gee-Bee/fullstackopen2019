import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content part1={part1} excercises1={exercises1}
               part2={part2} excercises2={exercises2}
               part3={part3} excercises3={exercises3} />
      <Total text="Number of excercises" value={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => (
  <h1>{props.title}</h1>
)

const Content = (props) => (
  <>
    <p>{props.part1} {props.excercises1}</p>
    <p>{props.part2} {props.excercises2}</p>
    <p>{props.part3} {props.excercises3}</p>
  </>
)

const Total = (props) => (
  <p>
    {props.text} {props.value}
  </p>
)

ReactDOM.render(<App />, document.getElementById('root'))