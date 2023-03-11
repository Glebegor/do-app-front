import s from "./styles.module.css" ;

const Button = (props:{title: string, oncl: React.MouseEventHandler}) => {
    return(
        <button onClick={props.oncl} className={s.button}><div>{props.title}</div></button>
    )
}

export default Button;