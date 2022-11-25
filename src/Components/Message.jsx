import { useEffect, useState } from "react";
import React from "react";
import { render } from "@testing-library/react";
import { CreateH1, CreateP } from "./CreateP";

export default function Message(props) {
    let [val, setVal] = useState(0);
    function increment() {
        setVal(val + 1);
    }
    let [inp, setInp] = useState('');
    let [res, setRes] = useState('');

    function input(e) {
        setInp(e.target.value);
    }

    function getRes() {
        setRes(inp);
        setInp('');
    }
    useEffect(() => {
        console.log(res);
    }
    )

    return (
        <div className="greeting" >
            <h1>{props.greet}</h1>
            <p>{props.value}</p>
            <button onClick={increment}>Нажать</button>
            <button onClick={getRes}>Новое слово</button>
            <input onChange={input} placeholder="Введите" value={inp}></input>
            <p>{val}</p>
            <p>{res}</p>
            <CreateP value={"fwegrgrgrg"} />
            <CreateP value={"fwegrgrgrg"} />
            <CreateP value={"fwegrgrgrg"} />
            <CreateH1 />
        </div>
    )
}
