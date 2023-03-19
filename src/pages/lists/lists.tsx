import s from "./styles.module.css"
import ModuleLists from "../../moduls/lists/module_lists";
import { Cookies } from "react-cookie";

const ListsPage = () => {

    return(
    <div className={s.listPage_inner}>
        <ModuleLists />
    </div>
    )
}

export default ListsPage;