import { useState } from "react";
import React from "react";
import cl from './Dialogs.module.css'

export function Messages(props) {
    const array = props.messages;
    const list = array.map(val => <div>{val.text}  +{val.likes} likes</div>)
    return <div>{list}</div>
}