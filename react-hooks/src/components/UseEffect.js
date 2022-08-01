import axios from "axios"
import { useEffect, useState } from "react"
export const Effector = ()=>{
    const [data,setData] = useState('')
    const [count,setCount] = useState(0)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            setData(response.data[0].title)
            console.log('API was called')
        })
        .catch((e)=>console.log(e))
    },[])
    return (
        <div>
            Hello World
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click here</button>

        </div>
    )
}