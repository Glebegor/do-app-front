import s from "./styles.module.css"
import ItemList from "../../component/item_list/item_list"
import axios from "axios"
import Cookies from 'universal-cookie';
import {useEffect, useState} from "react"

const ModuleItemOfLists = (): JSX.Element => {
    const cookies = new Cookies();
    
    type itemListItem = {
        Id: number
        Title: string,
        Description: string,
        Done: boolean
    }

    var secKey = process.env.secKey
    var tokenJwt: any = 'asdasd'
    tokenJwt = cookies.get("Todo-JWT")

    var payload = atob(tokenJwt.split('.')[1])
    var payloadToJson = JSON.parse(payload)

    
    const getAllListsUser= () =>{
        return(axios({
            method: "get",
            url: "http://localhost:8000/api/lists/2/items",
            headers: {Authorization: `Breare ${tokenJwt}`}
        })
        .then((response) => {
            console.log(response)
            // var dataAllLists: itemListItem[]
            // dataAllLists = response.data.data
            // return dataAllLists
        }))
    }
    getAllListsUser()
    // const [list, setList] = useState<itemListItem[] | []>([]);
    // useEffect(()=>{
    //     getAllListsUser()
    //     .then(setList)
    // }, [])
    return(
        <div>qasdasd
            {/* {list ?. length ?
                list.map((item:any) =>(
                    <div id={"listsOfItems"+item.id} className={s.listsOfItems}>
                        <ItemList id={item.id} title={item.title}/>
                    </div>
                )) 
                : <div>ClearList</div>} */}
        </div>
    )
}

export default ModuleItemOfLists