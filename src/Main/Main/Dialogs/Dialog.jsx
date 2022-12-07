import { useState } from "react";
import React from "react";
import cl from './Dialogs.module.css'
import { NavLink, Route, Routes } from "react-router-dom";

export function Dialog(props) {
    const array = props.profiles;
    const list = array.map(val => <div> <NavLink to={'/dialogs/' + val.link} className={navData => navData.isActive ? cl.active : cl.link}>{val.author}</NavLink></div>);
    return <div>{list}</div>
}