import { Link } from "react-router-dom"
import s from "./styles.module.css"

const LinkComp = (props: {url: string, text: string}) => {
    return(
        <Link className={s.link} to={props.url}>{props.text}</Link>
    )
}

export default LinkComp