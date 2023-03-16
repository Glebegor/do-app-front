import s from "./styles.module.css"
import NavigLink from "../../UI/NavigLink/navigLink"
import Cookies from "universal-cookie"

const NavBar = () => {
    const cookies = new Cookies();
    if (cookies.get('Todo-JWT') == null){
        return (
            <div className  ={s.headerNav}>
                <NavigLink  url="/home" title="Home"/>
                <NavigLink  url="/about-us" title="About us"/>
                <NavigLink  url="test" title="Test"/>
                <NavigLink  url="auth/sing-in" title="Sing-In"/>
                <NavigLink  url="auth/sing-up" title="Sing-Up"/>
            </div>
        )
    }else{
        return (
            <div className  ={s.headerNav}>
                <NavigLink  url="/home" title="Home"/>
                <NavigLink  url="/about-us" title="About us"/>
                <NavigLink  url="test" title="Test"/>
                <NavigLink  url="profile" title="Profile"/>
            </div>
        )
    }

}

export default NavBar