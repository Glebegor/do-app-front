import Input from "../../UI/form_input/input";
import Button from "../../UI/form_button/button";
import s from "./style.module.css";
import axios from "axios"
const FormReg = (props:{title: string, url: string, method: string}) => {
    const RegisterUser = (event: React.MouseEvent<HTMLElement>) => {
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
            .then((response) => {console.log(response)})


        }

    } 
    return(
        <form className={s.form}>
            <div className={s.title}>{props.title}</div>
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Repeat Password"/>
            <Button oncl={RegisterUser} title="Submit"/>
        </form>
    )
}

export default FormReg;