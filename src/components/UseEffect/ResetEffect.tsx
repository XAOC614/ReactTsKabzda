import React, {useEffect, useState} from "react";

export const ResetEffect = () => {
    const [counter,setCounter] = useState(1)

    console.log('Component rendered with' + counter)

    useEffect(()=>{
        console.log('Effect occurred' + counter)

        return ()=>{
            console.log('Reset Effect' + counter)
        }
    },[counter])
    return<>
        Hello, counter: {counter}
        <button onClick={()=>{setCounter(counter+1)}} >+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text,setText] = useState('')

    console.log('Component rendered with' + text)

    useEffect(()=> {
        const handler = (e:KeyboardEvent) =>{
            console.log(e.key)
            setText((state) => state + e.key)
        }
        window.addEventListener('keypress',handler)
        return ()=>{
            window.removeEventListener('keypress',handler)
        }
    },[])
    return<>
       Typed text : {text}
    </>
}