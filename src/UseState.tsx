import React, {useState} from "react";

export default {
    title:'useState demo'
}


export const Example1 = () => {
    console.log('Example1')
    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(['Dima','Valera','Artem'])

    const addUser = () => {

    }
}