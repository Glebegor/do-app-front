import s from "./styles.module.css"
import ModuleLists from "../../moduls/lists/module_lists";
import { Cookies } from "react-cookie";
import FormList from "../../component/form_list/form_list";
import ModuleItemOfLists from "../../moduls/itemOfLists/module_itemsOfLists";

const ListsPage = () => {
    const closeForm = () => {
        const FormCreatingList:HTMLElement|null= document.getElementById("FormCreatingList")
        if (FormCreatingList != null){FormCreatingList.classList.toggle(s.activateForm)}
    }
    return(
    <div className={s.listPage_inner}>
        <ModuleLists activateFormm={s.activateForm} />
        <ModuleItemOfLists />
        <div id="FormCreatingList" className={s.form_creating_inner}>
            <div className={s.form_creating}>
                <button onClick={closeForm} className={s.closeForm}></button>
                <FormList title="Creating List" method="post" url="http://localhost:8000/api/lists/"/>
            </div>
        </div>

    </div>
    )
}

export default ListsPage;