import s from "./styles.module.css"
import ListUser from "../../component/list_user/list_user";
const ModuleLists = (props: {activateFormm:any}) => {
    const OpenForm = () => {
        const FormCreatingList:HTMLElement|null= document.getElementById("FormCreatingList")
        if (FormCreatingList != null){FormCreatingList.classList.toggle(props.activateFormm)}
    }
    return(
        <div id="ListsInner" className={s.listsInner}>
            <ListUser />
            <button onClick={OpenForm} className={s.listsBtnCreate}>
                <div className={s.listsBtnCreateInner}></div>
            </button>
        </div>
    )
}
export default ModuleLists

