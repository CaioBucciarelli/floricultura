import Menu from "./menu"
import Log from "../interpolacao/login"
import Footer from "../interpolacao/footer"
import "../css/style.css"

function Login(){

    const logo = "https://cdn.discordapp.com/attachments/769166102424715294/1104632999871528982/Group_1_1.png"

    return(
        <div>
            <header className="header">
            <img src={logo}/>
                <Menu/>
            </header>
            <Log/>
            <Footer/>
        </div>
        
    )

}

export default Login;