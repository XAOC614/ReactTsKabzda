import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {
    ControlledCheckbox,
    ControlledInput, ControlledSelect,
    InputByButtonPress,
    UncontrolledInput
} from "./components/Input/UncontrolledInput";
import {Select} from "./components/Select/Select";
import {DifficultCountingExample} from "./components/UseMemo/UseMemo";




function App() {
    let [ratingValue, setRatingValue]= useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed]= useState<boolean>(false)
    let [on,setOn] = useState(false)
    const [value,setValue] = useState('2')
    return <div className='App'>
        <OnOff on={on} onChange={ setOn }/>
        {/*<UncontrolledOnOff />*/}
        {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
        <UncontrolledAccordion titleValue={'Users'}/>
        {/*<UncontrolledRating />*/}
        {/*<AppTitle title = {'Hello'} />*/}
        {/*<AppTitle title = {'My Friends'}/>*/}
        <Accordion titleValue = {'Menu'} collapsed={accordionCollapsed} onChange={setAccordionCollapsed}
                   items={[{title:'Dima', value:1},{title:'Sergey', value:2},{title:'Anna', value:3},{title:'Valera', value:4}]} onClick={console.log}/>
        <Rating value={ratingValue} onClick={setRatingValue}/>
        <UncontrolledInput/>
        <div>
            <InputByButtonPress/>
        </div>

        <ControlledInput/>
        <ControlledCheckbox/>
        <div>
            <ControlledSelect/>
        </div>
        <Select value={value} onChange={setValue} items={[{value:'1',title:'Minsk'},{value:'2',title:'Moskow'},{value:'3',title:'Kiev'}]}/>
        <DifficultCountingExample/>

    </div>
}
type AppTitlePropsType = {
    title: string

}
function AppTitle (props: AppTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
