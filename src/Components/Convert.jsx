import { useState } from "react";
import React from "react";


export function Convert() {
    const [km, setKm] = useState(0);
    const [miles, setMiles] = useState('')
    function inp(e) {
        setKm(e.target.value);
    }
    function convert(e) {
        e.preventDefault();
        setMiles('')
        setMiles(`${km} is ${km / 2} miles`)
    }
    return (
        <div>
            <form onSubmit={convert}>
                <input onInput={inp} ></input>
                <button>Вычислить</button>
                <p>{miles}</p>
            </form>
        </div>
    )
}
export function Array(props) {
    const arr = props.list;
    const post = arr.map((val, index) =>
        <li>{index + 1}. {val.lang}: {val.role} </li>)

    return <div><h1>{props.title}</h1>
        <ul>{post}</ul>
    </div>
}
