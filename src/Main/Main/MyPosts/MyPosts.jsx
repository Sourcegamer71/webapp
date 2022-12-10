import { useState } from "react";
import React from "react";
import { Post } from "./Post/Post";
import cl from './Post/Post.module.css'


export const MyPosts = (props) => {
    return <div>
        <div className={cl.container}>
            My posts
            <div>
                New Post
            </div>
            <div>
                <Post posts={props.posts} />
            </div>
        </div>
    </div>
}