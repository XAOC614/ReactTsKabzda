import React from "react";
type ItemType = {
    title:string
    value:any
}
type AccordionPropsType ={
    titleValue: string
    collapsed: boolean
    onChange:(value:boolean)=>void
    items:ItemType[]
    onClick:(value:any)=>void

}
type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}
type AccordionBodyPropsType = {
    items:ItemType[]
    onClick:(value:any)=>void
}
function Accordion1(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue} onClick={()=>props.onChange(!props.collapsed)}/>
        { props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

function AccordionTitle ( props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}
function AccordionBody (props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map((el,index) => <li onClick={()=>{props.onClick(el.value)}} key={index}>{el.title}</li>)}
        </ul>

}
const Accordion = React.memo(Accordion1)
export default Accordion;