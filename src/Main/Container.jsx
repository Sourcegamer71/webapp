import { useState } from "react";
import React from "react";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { SideBar } from "./SideBar/SideBar";
import cl from './Container.module.css'

export function Container() {
    return (
        <div id={cl.container} >
            <Header />
            <SideBar />
            <Main />
            <Footer />
        </div>
    )
}
