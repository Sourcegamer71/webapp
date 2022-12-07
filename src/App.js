import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import cl from './Container.module.css'
import { Header } from "./Main/Header/Header";
import { Main } from "./Main/Main/Main";
import { Footer } from "./Main/Footer/Footer";
import { SideBar } from "./Main/SideBar/SideBar";
export default function App(props) {
  return (
    <div id={cl.container}>
    <BrowserRouter>
            <Header />
            <SideBar />
            <Main profiles = {props.profiles} messages={props.messages} news = {props.news}/>
            <Footer />
    </BrowserRouter>
    </div>
  );
}