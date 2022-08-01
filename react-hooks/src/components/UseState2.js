import { useState } from "react"

export const InputUseState = ()=>{
    const [name,setName] = useState('')
    const [age,setAge] = useState('')

    const inputSubmitHander = (event)=>{
        alert(`Name: ${name} Age:${age}`)
    }
    return (
        <div>
            <form onSubmit={inputSubmitHander}>
            <input placeholder="Enter Name" type='text' value={name} onChange={(e)=>setName(e.target.value)} ></input>
            <input placeholder="Enter Age" type='text' value={age} onChange={(e)=>setAge(e.target.value)}></input>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}