import "../css/style.css"
import Menu from "./menu"
import UncontrolledExample from "../interpolacao/Slide"
import Footer from "../interpolacao/footer"

function Inicio(){
    return(
        <div>
            <header className="header">
                <h1 className="title">Floricultura</h1>
                <Menu/>
            </header>
            <UncontrolledExample/>
            <Footer/>
        </div>
    )

}

export default Inicio