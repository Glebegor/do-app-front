import Input from "../../UI/form_input/input";
import Button from "../../UI/form_button/button";
import s from "./style.module.css";
import axios from 'axios';
import { useState ,useEffect } from "react";
 
const FormSingIn = (props:{title: string, url: string, method: string}) => {

    const [data, setData] = useState([]);
    const AuthUser = (event: React.MouseEvent<HTMLElement>) => {
        const inputs:HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input")

        var bodyFormData = {
            "username": inputs[0].value,
            "password": inputs[1].value
        }
 
        if(props.method == "post"){
            axios({
                method: "post",
                url: props.url,
                data: bodyFormData,
            })
            .then((response) => {localStorage.setItem(`JWT`, JSON.stringify(response.data.token));})


        }

    } 
    return(
        <form className={s.form}>
            <div className={s.title}>{props.title}</div>
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            <Button  oncl={AuthUser} title='Submit'/>
        </form>
    )
}

export default FormSingIn;