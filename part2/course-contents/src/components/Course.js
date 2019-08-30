import React from 'react';

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

export default Course;