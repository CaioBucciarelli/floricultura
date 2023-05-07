import Menu from "./menu"
import Footer from "../interpolacao/footer"
import Produto from "../interpolacao/lista-produtos"
import "../css/style.css"

function Produtos(){

    const logo = "https://cdn.discordapp.com/attachments/769166102424715294/1104632999871528982/Group_1_1.png"

    return(
        <div>
            <header className="header">
                <img src={logo}/>
                <Menu/>
            </header>
            <Produto/>
            <Footer/>
        </div>
    )

}

export default Produtos