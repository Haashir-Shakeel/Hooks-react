import { useRef } from "react"
import { Button } from "./Button"
//we use this when we make a resuable compoennt that need to be invoked from outside
export const ImperativeHandler = ()=>{

    const buttonRef= useRef(null)

    return (
        <div>
            <button onClick={()=>buttonRef.current.alterToggle()} >Button from parent</button>
            <Button ref={buttonRef}/>
        </div>
    )
}