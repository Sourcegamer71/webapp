import { useState } from "react";
import React from "react";
import cl from './Sidebar.module.css';

export function SideBar() {
    return (
        <div id={cl.sidebar}>
            <div>База данных</div>
            <div>Ray of Hope</div>
            <div>Арт-студия</div>
            <div>18+</div>
            <div>Прочие проекты</div>
        </div>
    )
}
