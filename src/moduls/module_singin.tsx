import FormSingIn from "../component/form_singIn/form_singIn";
import ErrorWin from "../UI/error_window/error_window";

const ModuleSingIn = () => {
    return(
        <div>
            <ErrorWin message="Validate error. Password is not current"/>
            <FormSingIn title="Sing in" url="http://localhost:8000/auth/sing-in" method="post"/>
        </div>
    )
}
export default ModuleSingIn; 