import CheckBox from "../../UI/checkbox/checkbox";
import s from "./style.module.css";
const ItemList = (props:{title: string, id: number}) => {

    return(
        <div className={s.itemList}>
            <CheckBox />
            <div className={s.itemList_title}>{props.title}</div>
        </div>
    )
}

export default ItemList;