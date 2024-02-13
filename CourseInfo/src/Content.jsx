import Part1 from "./PartsOfCourse/Part1";
import Part2 from "./PartsOfCourse/Part2";
import Part3 from "./PartsOfCourse/Part3";

const Content = (props) => {
  const part1 = props.parts[0].name;
  const exercises1 = props.parts[0].exercises;
  const part2 = props.parts[1].name;
  const exercises2 = props.parts[1].exercises;
  const part3 = props.parts[2].name;
  const exercises3 = props.parts[2].exercises;
  
    return (
       <div>
       <Part1 part1={part1} exercises1={exercises1}/>
       <Part2 part2={part2} exercises2={exercises2}/>
       <Part3 part3={part3} exercises3={exercises3}/>
       </div>
    );
} 

export default Content;