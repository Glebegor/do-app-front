import s from "./styles.module.css"
import gear from "./header_gear.svg"
import React from "react"
const HeaderBtn = (props:{oncl: React.MouseEventHandler}) => {
    return(
        <div className={s.headerBtn_inner}>
            <button onClick={props.oncl} className={s.headerBtn}><img src={gear}/></button>
        </div>
    )
}

export default HeaderBtn