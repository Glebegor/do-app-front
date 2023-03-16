import * as jwt_decode from "jwt-decode";

const HomePage = () => {


    var secKey = "dsfu0u423jefs8dufp32ioj#wqe12"

    var tokenJwt: any = 'asdasd'
    tokenJwt = localStorage.getItem("JWT")
    var payload = atob(tokenJwt.split('.')[1])
    var payloadToJson = JSON.parse(payload)

    return(
        <div>{payloadToJson.Username}</div>
    )
}
export default HomePage