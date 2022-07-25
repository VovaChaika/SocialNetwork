import React from "react";
import {getUserData, logout} from "../../redux/auth_reducer";
let Timer = (props) =>{
    let timer_show = document.getElementById("timer");
    function diffSubtract(date1, date2) {
        return date2 - date1;
    }
    let end_date = {
        "full_year": "2023",
        "month": "06",
        "day": "19",
        "hours": "15",
        "minutes": "38",
        "seconds": "00"
    }
    let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;
    let timer = setInterval(function () {
        let now = new Date();
        let date = new Date(end_date_str);
        let ms_left = diffSubtract(now, date);
        if (ms_left <= 0) {
            clearInterval(timer);
            alert("Your subscribe is over")
            logout();
        } else {
            let res = new Date(ms_left);
            let str_timer = `${res.getUTCFullYear() - 1970}.${res.getUTCMonth()}.${res.getUTCDate() - 1} ${res.getUTCHours()}:${res.getUTCMinutes()}:${res.getUTCSeconds()}`;
            // timer_show.innerHTML = str_timer;
            return str_timer
        }
    }, 1000)
    return <div>

    </div>
}
export default Timer
