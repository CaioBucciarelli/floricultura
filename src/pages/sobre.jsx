import Menu from "./menu"
import Footer from "../interpolacao/footer"
import SobreContent from "../interpolacao/content-sobre"
import "../css/style.css"

function Sobre(){

    const logo = "https://cdn.discordapp.com/attachments/769166102424715294/1104632999871528982/Group_1_1.png"

    return(
        <div>
            <header className="header">
            <img src={logo}/>
                <Menu/>
            </header>
            <SobreContent/>
            <Footer/>
        </div>
    )

}

export default Sobre