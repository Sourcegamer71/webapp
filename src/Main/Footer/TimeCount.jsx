import React from "react";
import { useState, useEffect } from "react";

export function TimeOut() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        setTimeout(() => { setTime(time + 1) }, 1000)
    }
    )
    return (
        <div>Вы находитесь на сайте уже {time} секунд</div>
    )
}