import { useState } from "react";
import React from "react";
import cl from './Post.module.css'

export const Post = (props) => {
    return <div className={cl.post}>
        <div >{props.title}</div>
        <img className={cl.post_img} alt={props.al} src={props.src}></img>
    </div>
}