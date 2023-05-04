import Menu from "./menu"
import Log from "../interpolacao/login"
import "../css/style.css"

function Login(){
    return(
        <header className="header">
            <h1 className="title">Floricultura</h1>
            <Menu/>
        </header>
    )

}

export default Login;