import FormSingIn from "../component/form_singIn/form_singIn";
import ErrorWin from "../UI/error_window/error_window";
import Cookies from "universal-cookie"
const ModuleSingIn = () => {
    const cookies = new Cookies();
    if (cookies.get('Todo-JWT') == null){
        return(
            <div>
                <ErrorWin message="Validate error. Password is not current"/>
                <FormSingIn title="Sing in" url="http://localhost:8000/auth/sing-in" method="post"/>
            </div>
        )
    }else{
        return(
            <div>User have profile and don`t need login</div>
        )
    }

}
export default ModuleSingIn; 