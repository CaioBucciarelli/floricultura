import Menu from "./menu"
import Footer from "../interpolacao/footer"
import SobreContent from "../interpolacao/content-sobre"
import "../css/style.css"

function Sobre(){
    return(
        <div>
            <header className="header">
                <h1 className="title">Floricultura</h1>
                <Menu/>
            </header>
            <SobreContent/>
            <Footer/>
        </div>
    )

}

export default Sobre