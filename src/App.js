import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import cl from './Container.module.css'
import { Header } from "./Main/Header/Header";
import { Footer } from "./Main/Footer/Footer";
import { SideBar } from "./Main/SideBar/SideBar";
import { List } from "./Main/Main/List/List";
import { MyPosts } from "./Main/Main/MyPosts/MyPosts";
import { Title } from "./Main/Main/Title";
import { Dialogs } from "./Main/Main/Dialogs/Dialogs";

export default function App(props) {
  return (
    <div id={cl.container}>
    <BrowserRouter>
            <Header />
            <SideBar />
            <div id={cl.main} >
                <Routes>
                    <Route exact path="/" element={<Title />} />
                    <Route exact path="/profile/" element={<List news={props.appState.newsPage.news} />} />
                    <Route exact path="/data/" element={<MyPosts posts={props.appState.artPage.posts} />} />
                    <Route exact path="/dialogs/*" element={<Dialogs profiles={props.appState.dialogsPage.profiles} messages={props.appState.dialogsPage.messages2} />} />
                </Routes>
            </div>
            <Footer />
    </BrowserRouter>
    </div>
  );
}