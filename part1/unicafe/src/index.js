import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const DisplayCount = (props) => (
  <div>{props.text} {props.count}</div>
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
      <DisplayCount text='good' count={good} />
      <DisplayCount text='neutral' count={neutral} />
      <DisplayCount text='bad' count={bad} />
      <DisplayCount text='all' count={sum} />
      <DisplayCount text='average' count={average} />
      <DisplayCount text='postive' count={'' + positive + ' %'} />
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
