import React , {useReducer} from "react";
import "../App.css";

const initialState = 0;

const reducer = (stote , action ) => {
    switch(action){
        case "increment" : 
            return stote + 1;
        case "decrement" :
            return stote - 1 ; 
        case "initialized" :
            return stote = 0 ; 
        default : return stote;         
           
    }

}

const Count = () => {

    const [ count, dispatch ] = useReducer (reducer , initialState)

    return(
    <div className = "App">
        <h1>{count}</h1>
        <button className="btn" id = "green" onClick= {()=> dispatch("increment")} > + </button>
        <button className="btn" id = "red" onClick= {()=> dispatch("decrement")}> - </button>
        <button className="btn" id = "blue" onClick= {()=> dispatch("initialized")}> 0 </button>
    </div>
    )
}

export default Count;