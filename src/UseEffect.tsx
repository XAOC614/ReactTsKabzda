import React, {useEffect, useState} from "react";

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')


    useEffect(() => {
        console.log('UseEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('UseEffect only first render (componentDidMount')
        document.title = counter.toString()
    },[])
    useEffect(() => {
        console.log('UseEffect first render and every counter change')
        document.title = counter.toString()
    },[counter])
return<>
Hello,{counter}
    <button onClick={()=> setCounter(counter+1)}>+</button>
</>
}

export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')


    useEffect(() => {
        setTimeout(()=>{
            console.log('setTimeout')
            document.title = counter.toString();
        },1000)
    },[counter])

    useEffect(() => {
        setInterval(()=>{
            console.log('tik' + counter)
           setCounter((state)=>state+1)
        },1000)
    },[])

return<>
Hello,{counter}
    <button onClick={()=> setCounter(counter+1)}>+</button>
</>
}

