import { useState, useEffect } from "react";
import React from "react";

export function Form(props) {
    // const [val, setValue] = useState('')
    // const [inp, setInp] = useState('')
    // function changeValue(e) {
    //     setValue(e.target.value)

    // }
    // function clear() {
    //     setValue("")
    //     setInp('')
    // }
    // return (
    //     <div className="greeting">
    //         <input value={val} onChange={changeValue} type="text" />
    //         <button onClick={clear} >Очистить</button>
    //         <button onClick={changeValue} >rgereg</button>
    //         <p>{val}</p>
    //     </div>
    // )
    // const [count, setCount] = useState(0);

    // const updateCount = () => {
    //     setCount((prevCount) => prevCount + 1);
    // }

    // useEffect(() => {
    //     console.log(count);
    // }, [count]);

    // return (
    //     <div>
    //         <span className="counter">{count}</span>
    //         <button className="counter-button" onClick={updateCount}>Click!</button>
    //     </div>
    // )
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div>
            <span className="counter">{count}</span>
            <button className="counter-button" onClick={updateCount}>Click!</button>
        </div>
    )




}