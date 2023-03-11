import * as jwt_decode from "jwt-decode";

const HomePage = () => {


    var secKey = "dsfu0u423jefs8dufp32ioj#wqe12"

    var tokenJwt: any = 'asdasd'
    tokenJwt = localStorage.getItem("JWT")
    var payload = atob(tokenJwt.split('.')[1])
    // const decoded = jwt_decode(tokenJwt);
    // console.log(decoded)
    return(
        <div>{payload}</div>
    )
}
export default HomePage