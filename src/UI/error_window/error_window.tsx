import s from "./styles.module.css";

const ErrorWin = (props:{message: string}) => {
    const closeErrMess = () => {
        var errorInnerMessage = document.getElementsByClassName(s.error__inner)[0]
        var errorMessage = document.getElementsByClassName(s.error)[0]
        errorMessage.classList.toggle("active")
        if(errorMessage.classList.contains("active")){
            errorInnerMessage.setAttribute("style", "opacity:0;");
            setTimeout(() => {errorInnerMessage.setAttribute("style", "display:none;")}, 300)
        }
    }

    return(
        <div className={s.error__inner}>
            <div className={s.error}>
                <div className={s.errorMes}>
                    {props.message}
                </div>
                <button  onClick={closeErrMess} className={s.exit}><div></div></button>
            </div>
        </div>
    )
}

export default ErrorWin;