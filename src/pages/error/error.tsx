import ErrorModule from "../../moduls/error/error"

const ErrorPage = () => {
    return(
        <div><ErrorModule request="404"  errorMessage="Page not found"/></div>
    )
}

export default ErrorPage