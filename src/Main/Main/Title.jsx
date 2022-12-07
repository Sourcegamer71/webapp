import { useState } from "react";
import React from "react";
import cl from './Main.module.css'
import { Profile } from "./Profile/Profile";

export const Title = (props) => {
    return <div className={cl.title}>
        <img src={require("./4.jpg")} alt="wvrfvfevbtbe" />
        <h1>Добро пожаловать на официальный сайт вселенной The Squad</h1>
        <h1>wvwrvrf</h1>
        <Profile />
    </div>
}