import { useState } from "react";
import React from "react";
import Message from "./Message";

export function CreateP(props) {
    return (
        <div>{props.value}</div>
    )
}
export function CreateH1() {
    return (
        <h1>Заголовок</h1>
    )
}