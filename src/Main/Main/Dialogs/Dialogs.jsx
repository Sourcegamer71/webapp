import { useState } from "react";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import cl from './Dialogs.module.css';
import { Dialog } from "./Dialog";
import { Messages } from "./Message";


export function Dialogs(props) {
    return (
        <div className={cl.container}>
            <div className={cl.block}>
                <Dialog profiles={props.profiles} />
            </div>
            <div className={cl.block}>
                <Messages messages={props.messages} />
            </div>
        </div>
    )
}