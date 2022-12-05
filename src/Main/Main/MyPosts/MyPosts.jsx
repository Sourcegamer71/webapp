import { useState } from "react";
import React from "react";
import { Post } from "./Post/Post";
import cl from './Post.module.css'


export const MyPosts = () => {
    return <div>
        <div className={cl.container}>
            My posts
            <div>
                New Post
            </div>
            <div>
                <Post title='Рей' src={require('./1.jpg')} al='1' />
                <Post title='Ван Сюинь' src={require('./2.jpg')} al='2' />
                <Post title='Хиёнг' src={require('./3.jpg')} al='2' />
                <Post title='Шион' src={require('./4.jpg')} al='2' />
                <Post title='Йорк' src={require('./5.jpg')} al='2' />
            </div>
        </div>
    </div>
}