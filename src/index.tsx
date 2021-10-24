import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

const counterReducer = (state,action) => {
    switch(action.type) {
        case 'inc': return state + 1;
        case 'dec': return state - 1;
        case 'set': return action.value;
    }
}

const App = ({appTitle}) => {
    const [counter,dispatch] = useReducer(counterReducer,0);
    const [valueInput,setValueInput] = useState(0)
    return (
        <>
            <h1>{appTitle}</h1>
            <button onClick={() => dispatch({type:'inc'}) }>+</button>
            <p>{counter}</p>
            <button onClick={() => dispatch({type:'dec'}) }>-</button>
            <hr></hr>
            <input value={valueInput} onChange={(e) => setValueInput(parseInt(e.target.value))} type="number"></input>
            <button onClick={() => dispatch({type:'set',value:valueInput}) }>Set</button>

        </>
    )
}

ReactDOM.render(
    <App appTitle="Hello!" />,
    document.getElementById("hello-container")
)