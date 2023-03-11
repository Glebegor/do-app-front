import s from "./styles.module.css"
import { NavLink } from "react-router-dom"

const NavigLink = (props: {title: string, url:string}) => {
    return(
        <div className={s.navLink_inner}>
           <NavLink className={s.navLink} to={props.url} >{props.title}</NavLink>
        </div>
    )
}
export default NavigLink