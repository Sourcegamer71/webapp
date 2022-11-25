import { useState } from "react";
import React from "react";
import { List } from "./List";
export function PersonList(props) {
    const list = props.list;
    const [conts, setConts] = useState(list)
    const item = list.map((val, index) => <div className="list-item" >{index + 1}. {val} <button onClick={() => {
        list.splice(index, 1)


    }}>Удалить</button></div>)
    return (
        <div>{item}</div>
    )
}

