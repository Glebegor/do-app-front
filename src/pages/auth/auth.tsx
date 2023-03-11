import s from "./styles.module.css"
import ModuleReg from "../../moduls/module_reg"
import { Outlet } from "react-router-dom"
const Auth = () => {
    return (
        <div className={s.auth_inner}>
            <div className={s.auth}>
                <div className={s.auth_form}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Auth