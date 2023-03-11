import s from "./styles.module.css"
import NavBar from "../../component/nav/nav"
import HeaderBtn from "../../component/btn_header/HeaderBtn"
const ModuleHeader = () => {
    const changeActive = (event: React.MouseEvent<HTMLElement>) => {
        var getButton = event.currentTarget
        getButton.classList.toggle(s.active1)
        var getNav = document.getElementsByClassName(s.header)[0].getElementsByTagName("div")[1]
        getNav.classList.toggle(s.active2)
    }
    return(
        <div className="container">
            <div className={s.header}>
                <HeaderBtn oncl={changeActive}/>
                <NavBar/>
            </div>
        </div>

    )
}

export default ModuleHeader