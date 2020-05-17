import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => (
  <div>{props.text} {props.count}</div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const sum = good + neutral + bad
  const average = (good - bad) / sum
  const positive = (good / sum) * 100

  return (
    <div>
      <div>
        <Header text='give feedback' />
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
      </div>
      <div>
        <Header text='statistics' />
        <Statistics text='good' count={good} />
        <Statistics text='neutral' count={neutral} />
        <Statistics text='bad' count={bad} />
        <Statistics text='all' count={sum} />
        <Statistics text='average' count={average} />
        <Statistics text='postive' count={'' + positive + ' %'} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
