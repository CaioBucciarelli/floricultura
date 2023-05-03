import "../css/style.css"

function Produto() {

    const urlImg3 = "https://cdn.discordapp.com/attachments/1021540396381261985/1100127551323635783/flor2.jpg"

return (
  <div>
    <div className="produto">
        <img className="img-produto" src={urlImg3}/>
        <span className="preco-produto">R$ 100,00</span>
        <h2 className="title-produto">Orquídia</h2>
        <a className="btn-produto" href="">Comprar Agora</a>
    </div>
  </div>
  )
}

export default Produto;