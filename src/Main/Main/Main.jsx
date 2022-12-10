import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import cl from './Main.module.css';

import { MyPosts } from "./MyPosts/MyPosts";
import { Title } from "./Title";
import { Dialogs } from "./Dialogs/Dialogs";

export function Main(props) {
    return (
        <div id={cl.main} >
            <Routes>
                <Route exact path="/" element={<Title />} />
                <Route exact path="/data/" element={<MyPosts posts={props.posts} />} />
                <Route exact path="/dialogs/*" element={<Dialogs profiles={props.profiles} messages={props.messages} />} />
            </Routes>
        </div>
    )
}
