import FormReg from "../component/form_singUp/form_singUp"
import ErrorWin from "../UI/error_window/error_window"
import ItemList from "../component/item_list/item_list"
import Loading from "../UI/loading/loading"
import LinkComp from "../UI/Link/link"
import NavigLink from "../UI/NavigLink/navigLink"

const ModuleTest = () => {
    return(
        <div>
            <FormReg title="Registration" url="api/auth/sing-in" method="post" />
            <ErrorWin message="Validate error. Password is not current"/>
            <ItemList title="Task title item"/>
            <LinkComp url="/home/" text="Homepage"/>
            <LinkComp url="/reg/" text="Reg"/>
            <LinkComp url="/lists/" text="lists"/>
            <NavigLink url="/home" title="Homepage"/>
            <LinkComp url="/login/" text="login"/>
            <Loading width="100px" height="100px" font_size="18px"/>
        </div>
    )
}

export default ModuleTest