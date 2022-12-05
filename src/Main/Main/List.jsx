import { useState } from "react";
import React from "react";
import { PersonList } from "./ListItem";
import cl from './Main.module.css'
export function List(props) {
    const [inp, setInp] = useState('');
    const [val, setVal] = useState('');
    function input(e) {
        setInp(e.target.value)
    }
    function create(e) {

        setVal(inp);
        props.array.push(inp);
        setInp('')
        console.log(inp);
        console.log(props.array);
        e.preventDefault();
    }
    return (
        <div className={cl.list} >
            <form onSubmit={create}>
                <input value={inp} onInput={input}></input>
                <button>Добавить</button>
            </form>
            <PersonList list={props.array} />
        </div>
    )
}

