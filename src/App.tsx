import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {RatingValueType} from "./components/Rating/Rating";




function App() {
    let [ratingValue, setRatingValue]= useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed]= useState<boolean>(false)
    return <div className='App'>
        {/*<OnOff />*/}
        {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
        {/*<UncontrolledAccordion titleValue={'Users'}/>*/}
        {/*<UncontrolledRating />*/}
        {/*<AppTitle title = {'Hello'} />*/}
        {/*<AppTitle title = {'My Friends'}/>*/}
        <Accordion titleValue = {'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
        <Rating value={ratingValue} onClick={setRatingValue}/>

    </div>
}
type AppTitlePropsType = {
    title: string
}
function AppTitle (props: AppTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
