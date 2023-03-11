import { Outlet, Link } from "react-router-dom";
import ModuleHeader from "../../moduls/header/module_header";
import ModuleFooter from "../../moduls/module_footer";
const Layout = () => {

  return (
    <>
      <ModuleHeader/>
      <div className="container">
        <Outlet/>
      </div>
      <ModuleFooter/>
    </>
  )
};

export default Layout;