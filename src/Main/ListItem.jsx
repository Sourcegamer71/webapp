import { useState } from "react";
import React from "react";
import { List } from "./List";
export function PersonList(props) {
    const list = props.list;
    const itemlist = list.map((val, index) => <p className="list-item " >{index + 1}. {val}</p>)
    return (
        <div>{itemlist}</div>
    )
}

