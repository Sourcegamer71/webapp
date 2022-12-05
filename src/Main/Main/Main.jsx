import { useState } from "react";
import React from "react";
import { List } from "./List";
import cl from './Main.module.css';
import { MyPosts } from "./MyPosts/MyPosts";
import { Title } from "./Title";

const girls = ['Катя', 'Тоня', 'Кристина', 'Оксана', 'Лена', 'Амина'];
const langs = ['C++', 'Python', 'C#', 'JS', 'React'];
export function Main() {
    return (
        <div id={cl.main} >
            <Title />
            {/* <List array={langs} /> */}
            <MyPosts />
        </div>
    )
}
