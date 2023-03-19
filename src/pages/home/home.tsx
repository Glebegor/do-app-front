import * as jwt_decode from "jwt-decode";
import { Cookies } from "react-cookie";

const HomePage = () => {
    const cookies = new Cookies();

    var secKey = process.env.secKey

    var tokenJwt: any = 'asdasd'
    tokenJwt = cookies.get("Todo-JWT")
    var payload = atob(tokenJwt.split('.')[1])
    var payloadToJson = JSON.parse(payload)

    return(
        <div>{payloadToJson.Username}</div>
    )
}
export default HomePage