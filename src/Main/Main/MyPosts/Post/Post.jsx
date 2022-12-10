import { useState } from "react";
import React from "react";
import cl from './Post.module.css'

export const Post = (props) => {
    const array = props.posts;
    const list = array.map(val => <div className={cl.post}>
        <div >{val.title}</div>
        <img className={cl.post_img} src={val.src}></img>
    </div>)
    return <div>{list}</div>
}
