import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  //avarage good: 1  neutral: 0  bad: -1
  

  const giveGoodFeedback = () => {
  const newGood = good + 1;
  const newAll = all + 1;
  setGood(newGood);
  setAll(newAll);
  calculateAverage(newAll);
};

const giveNeutralFeedback = () => {
  const newNeutral = neutral + 1;
  const newAll = all + 1;
  setNeutral(newNeutral);
  setAll(newAll);
  calculateAverage(newAll);
};

const giveBadFeedback = () => {
  const newBad = bad + 1;
  const newAll = all + 1;
  setBad(newBad);
  setAll(newAll);
  calculateAverage(newAll);
};

const calculateAverage = (newAll) => {
  const newAverage = (good - bad) / newAll;
  console.log('this is the ALL:', newAll);
  setAverage(newAverage);
  calculatePositive(newAll);
};

const calculatePositive = (newAll) => {
  const newPositive = (good / newAll) * 100;
  setPositive(newPositive);
  console.log('this is the ALL:', newAll);
};


  return (
    <div>
      <h1>Give FeedBack!!!</h1>
      <button onClick={giveGoodFeedback}>Good</button>
      <button onClick={giveNeutralFeedback}>Neutral</button>
      <button onClick={giveBadFeedback}>Bad</button>
      

      
      <h1>Stadistics</h1>
      <p>Good={good}</p>
      <p>Neutral={neutral}</p>
      <p>Bad={bad}</p>

      <p>Total={all}</p>
      <h1>{all}</h1>

      <p>Avarage={average}%</p>
      <p>Positive={positive}%</p>
    </div>
  )
}

export default App