//import Display from "./Display"
import { useState } from 'react'

//the beginning of the exercise in part 1

// const App = () => {

//   const [ counter, setCounter ] = useState(0)
//   console.log('rendering with counter value', counter)


//   const increaseByOne = () => {
//   console.log('increasing, value before', counter)
//   setCounter(counter + 1)
//   }


//   const decreaseByOne = () => {
//   console.log('decreasing, value before', counter)
//   setCounter(counter - 1)
// }

//   const setToZero = () => {
//   console.log('resetting to zero, value before', counter)
//   setCounter(0)
// }
//   return (
//     <div>
      
//       <Display counter={counter}/>
//       <Button
//         onClick={increaseByOne}
//         text='plus'
//       />
//       <Button
//         onClick={setToZero}
//         text='zero'
//       />     
//       <Button
//         onClick={decreaseByOne}
//         text='minus'
//       /> 
      
//     </div>
//   )
// }

// export default App


// const Button = (props) => {
//   return (
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
//   )
// }


//almost the last exercise of part 1

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }
// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updateRight = right + 1
//     setRight(updateRight)
//     setTotal(left + updateRight)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks}/>
//       <p>total {total}</p>
//     </div>
//   )
// }

//last exercise of part 1
const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
export default App