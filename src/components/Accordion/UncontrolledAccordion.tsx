import React, {useReducer, useState} from "react";
type AccordionPropsType ={
    titleValue: string
    //collapsed: boolean
}
type ActionType = {
    type:string
}
type StateType = {
    collapsed:boolean
}
const reducer = (state:StateType,action:ActionType):StateType => {
    switch(action.type){
        case 'TOGGLE-COLLAPSED':
            return {...state, collapsed:!state.collapsed}
        default:
            throw new Error('Bad action type')
    }
    return state

    // if(action.type === 'TOGGLE-COLLAPSED'){
    //     return !state
    // }
}
function UncontrolledAccordion(props: AccordionPropsType) {
 //let [collapsed,setCollapsed] = useState(false)
 let [state,dispatch] = useReducer(reducer,{collapsed:false})
    return <div>
        {/*<AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>*/}
        <AccordionTitle title={props.titleValue} onClick={()=> dispatch({type:'TOGGLE-COLLAPSED'})}/>

        { !state.collapsed && <AccordionBody/>}
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
export default UncontrolledAccordion;