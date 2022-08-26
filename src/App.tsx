import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return <div>
        <AppTitle title = {'Hello'} />
        <AppTitle title = {'My Friends'}/>
        <Accordion titleValue = {'Menu'} collapsed={true}/>
        <Accordion titleValue = {'Users'} collapsed={false}/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
    </div>
}
type AppTitlePropsType = {
    title: string
}
function AppTitle (props: AppTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;
