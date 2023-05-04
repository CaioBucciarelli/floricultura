import Menu from "./menu"
import Footer from "../interpolacao/footer"
import Produto from "../interpolacao/lista-produtos"
import "../css/style.css"

function Produtos(){
    return(
        <div>
            <header className="header">
                <h1 className="title">Floricultura</h1>
                <Menu/>
            </header>
            <Produto/>
            <Footer/>
        </div>
    )

}

export default Produtos