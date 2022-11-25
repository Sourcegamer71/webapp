import { useState } from "react";
import React from "react";
import { List } from "./List";
const girls = ['Катя', 'Тоня', 'Кристина', 'Оксана', 'Лена', 'Амина'];
const langs = ['C++', 'Python', 'C#', 'JS', 'React'];
export function Main() {
    return (
        <div id='main' >
            <List array={girls} />
        </div>
    )
}
