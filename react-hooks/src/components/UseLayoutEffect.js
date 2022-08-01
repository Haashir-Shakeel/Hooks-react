import { useEffect, useLayoutEffect, useRef } from "react"

export const LayoutEffect = ()=>{
    const inputRef = useRef(null)
    //useEffect is called before everything is rendered into the page
    //the example shows that console returns pedro even though we are updating the value in useEffect
    useLayoutEffect(()=>{
        // console.log(inputRef.current.value)
        inputRef.current.value="Diana"
    },[])
    //useEffect is called after everything is rendered into the page
    //but if we change value in layouteffect , useffect consoles dinana
    useEffect(()=>{
        // inputRef.current.value="Diana"
        console.log(inputRef.current.value)
    },[])

    return <div>
        <input ref={inputRef} value="PEDRO" style={{width:400, padding:50}}></input>
    </div>
}