import { useState } from "react";
import React from "react";
import cl from './Footer.module.css';
import { TimeOut } from "./TimeCount";
export function Footer() {
    return (
        <div id={cl.footer}>
            <div>Contact us</div>
            <div>All Rights Reserved</div>
            <TimeOut />
        </div>
    )
}
