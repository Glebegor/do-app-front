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
                <NavigLink  url="/lists" title="Lists"/>
                <NavigLink  url="test" title="Test"/>
                <div className={s.navProfileImageInner}>
                    <NavigLink  url="profile" title="Profile"/>
                    <svg className={s.navSvgImg} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="#61B3FF" d="M11.5,8 C12.3284271,8 13,8.67157288 13,9.5 L13,10 C13,11.9714437 11.14049,14 8,14 C4.85950997,14 3,11.9714437 3,10 L3,9.5 C3,8.67157288 3.67157288,8 4.5,8 L11.5,8 Z M8,1.5 C9.51878306,1.5 10.75,2.73121694 10.75,4.25 C10.75,5.76878306 9.51878306,7 8,7 C6.48121694,7 5.25,5.76878306 5.25,4.25 C5.25,2.73121694 6.48121694,1.5 8,1.5 Z"/></svg>
                </div>
            </div>
        )
    }

}

export default NavBar