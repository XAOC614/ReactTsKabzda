import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {ControlledInput, InputByButtonPress, UncontrolledInput} from "./components/Input/UncontrolledInput";




function App() {
    let [ratingValue, setRatingValue]= useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed]= useState<boolean>(false)
    let [on,setOn] = useState(false)
    return <div className='App'>
        <OnOff on={on} onChange={ setOn }/>
        {/*<UncontrolledOnOff />*/}
        {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
        {/*<UncontrolledAccordion titleValue={'Users'}/>*/}
        {/*<UncontrolledRating />*/}
        {/*<AppTitle title = {'Hello'} />*/}
        {/*<AppTitle title = {'My Friends'}/>*/}
        <Accordion titleValue = {'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <UncontrolledInput/>
        <ControlledInput/>
        <InputByButtonPress/>

    </div>
}
type AppTitlePropsType = {
    title: string

}
function AppTitle (props: AppTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
