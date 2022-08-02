import { useContext } from "react"
import { AppContext } from "./UseContext"

export const Login = () =>{
    const {setUsername,}=useContext(AppContext)
    return(
        <div>
            <input 
            onChange={(event)=>{
                setUsername(event.target.value)
                }}></input>
        </div>
    )
}