import React from "react";
type AccordionPropsType ={
    titleValue: string
    collapsed: boolean
    onClick:(value:boolean)=>void

}
function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue} onClick={()=>props.onClick(!props.collapsed)}/>
        { props.collapsed && <AccordionBody/>}
    </div>
}
type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}
function AccordionTitle ( props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}
function AccordionBody (props: any) {
    return <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

}
export default Accordion;