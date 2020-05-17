import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistic = (props) => (
  <div>{props.text} {props.value}</div>
)

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  const sum = good + neutral + bad
  const average = (good - bad) / sum
  const positive = (good / sum) * 100

  return (
    <>
      <Statistic text='good' value={good} />
      <Statistic text='neutral' value={neutral} />
      <Statistic text='bad' value={bad} />
      <Statistic text='all' value={sum} />
      <Statistic text='average' value={average} />
      <Statistic text='postive' value={'' + positive + ' %'} />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
