import s from "./styles.module.css" ;

const input = (props:{type: string, placeholder: string}) => {
    return(
        <div className={s.input_inner}><input placeholder={props.placeholder} type={props.type}></input>
                <div className={s.input_line2}></div>
                <div className={s.input_line1}></div>
            </div>
    )
}

export default input;