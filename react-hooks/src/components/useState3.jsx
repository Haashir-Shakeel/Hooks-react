import { useState } from "react"

export const ComplexState = () =>{
    const [Contact, setContact]=useState({
        fName: "",
        lName: "",
        email: ""

    })
    const changeHandler = (event)=>{
        const {name,value} = event.target
        

        setContact(prevValue =>{
            if (name === "fName"){
                return{
                    fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email
                }                                       
            }else if (name === "lName"){
                return{
                    fName: prevValue.fName,
                    lName: value,
                    email: prevValue.email
                }
            } else if (name === "email"){
                return{
                    fName: prevValue.fName,
                    lName: prevValue.lName,
                    email: value
                }
            }            
        })
    }

    return (
        <div>
            <h1>
                Hello {Contact.fName} {Contact.lName}
            </h1>
            <p>{Contact.email}</p>
            <form>
                <input onChange={changeHandler} value={Contact.fName} name="fName" placeholder="First Name" />
                <input onChange={changeHandler} value={Contact.lName} name="lName" placeholder="Last Name" />
                <input onChange={changeHandler} value={Contact.email} name="email" placeholder="Email"  />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
