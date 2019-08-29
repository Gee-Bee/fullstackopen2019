import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ anecdotes}) => {
  const [selectedIdx, setSelectedIdx] = useState(randomIdx);
  const [points, setPoints] = useState(
    new Array(anecdotes.length).fill(0)
  );

  return (
    <>
      <AnecdoteOfTheDay anecdote={anecdotes[selectedIdx]} points={points[selectedIdx]} />
      <Buttons points={points} setPoints={setPoints}
               selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      <AnecdoteWithMostVotes anecdotes={anecdotes} points={points} />
    </>
  )
}

const AnecdoteOfTheDay = ({ anecdote, points }) => (
  <>
    <h1>Anecdote of the day</h1>
    <Anecdote text={anecdote} votes={points} />
  </>
)

const Buttons = ({ points, setPoints, selectedIdx, setSelectedIdx }) => {
  const handleVote = () => {
    const newPoints = [...points]
    newPoints[selectedIdx] += 1;
    setPoints(newPoints);
  }

  const selectRandom = () => setSelectedIdx(randomIdx());

  return (
    <>
      <button onClick={handleVote}>vote</button>
      <button onClick={selectRandom}>next anecdote</button>
    </>
  )
}

const AnecdoteWithMostVotes = ({ anecdotes, points }) => {
  const maxPoints = Math.max(...points);
  const mostPopularIdxs = points.reduce((acc, value, idx) => {
    if(value !== 0 && value === maxPoints) acc.push(idx);
    return acc;
  }, []);

  if (!mostPopularIdxs.length) return null;

  return (
    <>
      <h1>Anecdote with most votes</h1>
      {
        mostPopularIdxs.map((idx) =>
          // annecdote idx is constant
          <Anecdote key={idx} text={anecdotes[idx]} votes={points[idx]} />
        )
      }
    </>
  )
}

const Anecdote = ({ text, votes }) => (
  <p>
    {text}<br />
    has {votes} votes
  </p>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const randomIdx = () => Math.floor(Math.random() * anecdotes.length);

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)