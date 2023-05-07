import "../css/style.css"
import Menu from "./menu"
import UncontrolledExample from "../interpolacao/Slide"
import Footer from "../interpolacao/footer"

function Inicio(){

    const logo = "https://cdn.discordapp.com/attachments/769166102424715294/1104632999871528982/Group_1_1.png"

    return(
        <div>
            <header className="header">
                <img src={logo}/>
                <Menu/>
            </header>
            <UncontrolledExample/>
            <Footer/>
        </div>
    )

}

export default Inicio;