import React, {ChangeEvent, useRef, useState} from "react";
import {string} from "prop-types";

 const UncontrolledInput1 = () =>{
    const [value,setValue]=useState('')
    const onChange = (event:ChangeEvent<HTMLInputElement>)=>{
        const actualValue = event.currentTarget.value
        setValue(actualValue)}

    return  <><input  onChange={onChange}/> -{value}</>

}
export const UncontrolledInput = React.memo(UncontrolledInput1)

 const InputByButtonPress1 = () =>{
    const [value,setValue]=useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () =>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return  <><input ref={inputRef}/> <button onClick={save}>save</button> actual value : {value}</>

}
export const InputByButtonPress = React.memo(InputByButtonPress1)

 const ControlledInput1 = () => {
const [parentValue,setParentValue]=useState('')
const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
    setParentValue(e.currentTarget.value)
}
    return <input onChange={onChange} value={parentValue}/>
}
export const ControlledInput = React.memo(ControlledInput1)
 const ControlledCheckbox1 = () => {
    const [parentValue,setParentValue]=useState(true)
    const onChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange} />
}
export const ControlledCheckbox = React.memo(ControlledCheckbox1)
 const ControlledSelect1 = () => {
    const [parentValue,setParentValue]=useState<string|undefined>(undefined)
    const onChange = (e:ChangeEvent<HTMLSelectElement>) =>{
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}
export const ControlledSelect = React.memo(ControlledSelect1)