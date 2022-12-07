import { useState } from "react";
import React from "react";
import cl from './Sidebar.module.css';
import { NavLink } from "react-router-dom";

export function SideBar() {
    return (
        <div id={cl.sidebar}>
            <div className={cl.item}>
                <NavLink className={navData => navData.isActive ? cl.active : cl.link} to="/">Главная</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink className={navData => navData.isActive ? cl.active : cl.link} to="/profile">Профиль</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink className={navData => navData.isActive ? cl.active : cl.link} to="/data">Данные</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink className={navData => navData.isActive ? cl.active : cl.link} to="/dialogs">Чат</NavLink>
            </div>
        </div>
    )
}
