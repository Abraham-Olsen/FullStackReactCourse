const Total = (props) => {
    const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
    return (
        <div>
            <h3>Total of Exercises: {total}</h3>
        </div>
    );
} 

export default Total;