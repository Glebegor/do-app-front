import s from "./styles.module.css" ;
import React from "react";

const CheckBox = (props:{}) => {

    const chageCheck = (event: React.MouseEvent<HTMLElement>) => {
        const checkbox = event.currentTarget
        checkbox.classList.toggle(s.active)
    } 
   
    return(<div onClick={chageCheck} className={`${s.checkbox}`}>
        <div className={s.checkyes}></div>
        <div  className={s.checkyes2}></div>
    </div>)
}

export default CheckBox;