import { useState } from "react";
import React from "react";
import { PersonList } from "./ListItem";

export function List(props) {
    const [inp, setInp] = useState('');
    const [girl, setGirl] = useState('')
    function input(e) {
        setInp(e.target.value);
    }
    function create(e) {
        e.preventDefault();
        setGirl(inp);
        props.array.push(inp)
        console.log(props.array);
        setInp('');
    }
    return (
        <div className="list" >
            <form onSubmit={create} >
                <input onChange={input} placeholder="Введите имя" value={inp}></input>
                <button>Добавить</button>
            </form>
            <h1>Список</h1>
            <PersonList list={props.array} />
        </div>
    )

}

