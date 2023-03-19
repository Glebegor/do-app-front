import s from "./styles.module.css"
import axios from "axios"
import internal from "stream";
import Cookies from 'universal-cookie';
import ListUser from "../../component/list_user/list_user";
import ReactDOM from 'react-dom/client';
import {useEffect, useState} from "react"
import { cpSync } from "fs";
const ModuleLists = () => {
    return(
        <div id="ListsInner" className={s.listsInner}>
            <ListUser />
            <button  className={s.listsBtnCreate}>
                <div className={s.listsBtnCreateInner}></div>
            </button>
        </div>
    )
}
export default ModuleLists

