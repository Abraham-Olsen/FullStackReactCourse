import { useState } from 'react'



const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )

}

const Statistic = ({ average, positive, all, good, neutral, bad}) => {
  if (isNaN(average) && isNaN(positive)) {
    return (
      <div>
        <h1>No Feedback Given!!</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{positive}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const giveGoodFeedback = () => {
    const newGood = good + 1;
    const newAll = all + 1;
    setGood(newGood);
    setAll(newAll);
  };

  const giveNeutralFeedback = () => {
    const newNeutral = neutral + 1;
    const newAll = all + 1;
    setNeutral(newNeutral);
    setAll(newAll);
  };

  const giveBadFeedback = () => {
    const newBad = bad + 1;
    const newAll = all + 1;
    setBad(newBad);
    setAll(newAll);
  };

  // Calcular la media y el porcentaje de comentarios positivos
  const average = (good - bad) / all;
  const positive = (good / all) * 100;


  if(good === 0 && neutral === 0 && bad === 0){
    return (
      <div>
        <h1>Give Feedback!!!</h1>
        <Button handleClick={giveGoodFeedback} text={"Good"}/>
        <Button handleClick={giveNeutralFeedback} text={"Neutral"}/>
        <Button handleClick={giveBadFeedback} text={"Bad"}/>
        <h1>No Feedback Given!!</h1>
      </div>
    );

  }
  return (
    <div>
      <h1>Give Feedback!!!</h1>
      <Button handleClick={giveGoodFeedback} text={"Good"}/>
      <Button handleClick={giveNeutralFeedback} text={"Neutral"}/>
      <Button handleClick={giveBadFeedback} text={"Bad"}/>

      
      
      {/* Pasar los valores calculados a Statistic como props */}
      
      <Statistic average={average} positive={positive} all={all} good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
export default App;