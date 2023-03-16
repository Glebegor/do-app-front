import FormReg from "../component/form_singUp/form_singUp";
import ErrorWin from "../UI/error_window/error_window";
import Cookies from "universal-cookie"
const ModuleReg = () => {
    const cookies = new Cookies();
    if (cookies.get('Todo-JWT') == null){
        return(
            <div>
                <ErrorWin message="Validate error. Password is not current"/>
                <FormReg title="Sing up" url="http://localhost:8000/auth/sing-up" method="post"/>
            </div>
        )
    }else{
        return(
            <div>User have profile and don`t need register</div>
        )
    }
}
export default ModuleReg; 