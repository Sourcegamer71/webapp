import { useState } from "react";
import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import '../Styles/Container.css'

export function Container() {
    return (
        <div id='container' >
            <Header />
            <SideBar />
            <Main />
            <Footer />
        </div>
    )
}
