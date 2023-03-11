import FormReg from "../component/form_singUp/form_singUp";
import ErrorWin from "../UI/error_window/error_window";

const ModuleReg = () => {
    return(
        <div>
            <ErrorWin message="Validate error. Password is not current"/>
            <FormReg title="Sing up" url="http://localhost:8000/auth/sing-up" method="post"/>
        </div>
    )
}
export default ModuleReg; 