import s from "./styles.module.css"
import NavigLink from "../../UI/NavigLink/navigLink"
const NavBar = () => {
    return (
        <div className  ={s.headerNav}>
            <NavigLink  url="/home" title="Home"/>
            <NavigLink  url="/about-us" title="About us"/>
            <NavigLink  url="test" title="Test"/>
            <NavigLink  url="auth/sing-in" title="Sing-In"/>
            <NavigLink  url="auth/sing-up" title="Sing-Up"/>
        </div>
    )
}

export default NavBar