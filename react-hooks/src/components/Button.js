import { forwardRef, useImperativeHandle, useState } from "react"

export const Button = forwardRef((props,ref) =>{
    const [toggle,setToggle] = useState(false)
    
    useImperativeHandle(ref, () => ({
        alterToggle (){
            setToggle(!toggle)
        },
    }))
  
    return(
        <div>
            <button > Button from child</button>
            {toggle && <span>Toggle</span>}
        </div>
    )
  
})