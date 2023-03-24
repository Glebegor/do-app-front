import Input from "../../UI/form_input/input";
import Button from "../../UI/form_button/button";
import s from "./style.module.css";
import axios from 'axios';
import Cookies from 'universal-cookie';
import {useEffect, useState} from "react"

const FormList = (props:{title: string, url: string, method: string}) => {
    const cookies = new Cookies();

    const createList = () =>{
        const inputs:HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input")
        var bodyFormData = {
            "Description": inputs[1].value,
            "Title": inputs[0].value
        }
        var tokenJwt: any = 'asdasd'
        tokenJwt = cookies.get("Todo-JWT")
        console.log(inputs)
        if(props.method == "post"){
            axios({
                method: "post",
                url: props.url,
                data: bodyFormData,
                headers: {Authorization: `Breare ${tokenJwt}`}
            })
            .then((response) => {
                console.log(response)
            })
        }
    }
   
    return(
        <form className={s.form}>
            <div className={s.title}>{props.title}</div>
            <Input type="text" placeholder="Title"/>
            <Input type="text" placeholder="Description"/>
            <Button  oncl={createList} title='Submit'/>
        </form>
    )
}

export default FormList;