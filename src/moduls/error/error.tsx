import s from "./styles.module.css"

const ErrorModule = (props: {request: string, errorMessage: string}) => {
    return(
        <div className={s.error_inner}>
            <div className={s.error}>
                <div className={s.request}>{props.request}</div>
                <div className={s.error_message}>{props.errorMessage}</div>
            </div>
        </div>
    )
}

export default ErrorModule