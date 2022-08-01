import { useRef } from "react"

// useRef hook is the easiest way to access and manipulate dom elements
export const Ref= () =>{
    const inputRef = useRef(null)

    const onClick = ()=>{
        inputRef.current.focus()
        inputRef.current.value = ""
    }
    return (
        <div>
            <input type="text" placeholder="Ex ... " ref={inputRef}></input>
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}