import { useState, useReducer } from "react"
// if htere are more than one action you want to change, consider using useReducer hook
export const Reducer =()=>{

    const reducer = (state,action)=>{
        switch(action.type){
            case "increment":
                return{count:state.count+1,showText:state.showText}
            case "toggleShowText":
                return{count:state.count,showText:!state.showText}
        }
    }

    const [state,dispatch]=useReducer(reducer,{count:0,showText:true})
    
    // const [count,setCount] = useState(0)
    // const [showText,setShowText] = useState(true)
    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>{
                dispatch({type:"increment"})
                dispatch({type:"toggleShowText"})
                // setCount(count+1)
                // setShowText(!showText)
            }}
            >Click Here!</button>
            {state.showText && <p>This is a text</p>}
        </div>
    )
}