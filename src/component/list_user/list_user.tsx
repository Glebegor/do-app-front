import s from "./styles.module.css"
import axios from "axios"
import Cookies from 'universal-cookie';
import {useEffect, useState} from "react"


const ListUser = (): JSX.Element => {
    const cookies = new Cookies();
    
    type itemList = {
        id: number
        title: string,
        description: string,
    }

    var secKey = process.env.secKey
    var tokenJwt: any = 'asdasd'
    tokenJwt = cookies.get("Todo-JWT")

    var payload = atob(tokenJwt.split('.')[1])
    var payloadToJson = JSON.parse(payload)

    
    const getAllListsUser= () =>{
        return(axios({
            method: "get",
            url: "http://localhost:8000/api/lists/",
            headers: {Authorization: `Breare ${tokenJwt}`}
        })
        .then((response) => {
            var dataAllLists: itemList[]
            dataAllLists = response.data.data
            return dataAllLists
        }))
    }

    const [list, setList] = useState<itemList[] | []>([]);
    useEffect(()=>{
        getAllListsUser()
        .then(setList)
    }, [])

    return(
            <div className={s.ListMain}>
                {list ?. length ?
                list.map((item:any) =>(
                    <div id={"ListCard"+item.id} className={s.ListCard}>
                        <div className={s.ListTitle}><button className={s.ListTitleBtn}>{item.title}</button></div>
                    </div>
                )) 
                : <div>ClearList</div>}
            </div>
    )
}

export default ListUser