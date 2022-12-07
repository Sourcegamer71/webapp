import { useState } from "react";
import React from "react";
import cl from './Header.module.css';

export function Header() {
    return (
        <div id={cl.header}>
            <img height={'100%'} src={require('./logo.jpg')}></img>
        </div >
    )
}
