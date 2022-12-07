import { useState } from "react";
import React from "react";
import { Post } from "./Post/Post";
import cl from './Post/Post.module.css'


export const MyPosts = () => {
    return <div>
        <div className={cl.container}>
            My posts
            <div>
                New Post
            </div>
            <div>
                <Post title='Рей' src={require('./img/1.png')} al='1' />
                <Post title='Ван Сюинь' src={require('./img/2.png')} al='2' />
                <Post title='Хиёнг' src={require('./img/3.png')} al='2' />
                <Post title='Шион' src={require('./img/4.png')} al='2' />
                <Post title='Йорк' src={require('./img/5.png')} al='2' />
            </div>
        </div>
    </div>
}