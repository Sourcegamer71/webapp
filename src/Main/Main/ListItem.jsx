import { useState } from "react";
import React from "react";
import { List } from "./List";
import cl from './Main.module.css';
export function PersonList(props) {
    const list = props.list;
    const itemlist = list.map((val, index) => <p className={cl.list_item} >{index + 1}. {val}</p>)
    return (
        <div>{itemlist}</div>
    )
}

