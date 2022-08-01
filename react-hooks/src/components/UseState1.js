import { useState } from 'react'
export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increment=()=>{
        setCounter(counter+1)
    }

    return (
        <div>
            {counter}                                                                    
            <button onClick={increment}>Click to increment</button>
        </div>
    )
}