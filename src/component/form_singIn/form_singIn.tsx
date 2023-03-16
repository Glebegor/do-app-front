import Input from "../../UI/form_input/input";
import Button from "../../UI/form_button/button";
import s from "./style.module.css";
import axios from 'axios';
import Cookies from 'universal-cookie';
const FormSingIn = (props:{title: string, url: string, method: string}) => {
    const cookies = new Cookies();

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
            .then((response) => {cookies.set('Todo-JWT', JSON.stringify(response.data.token), {path: "/"});})


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