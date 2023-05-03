import "../css/style.css"

function SobreConent() {

    const urlImg1 = "https://cdn.discordapp.com/attachments/1021540396381261985/1100127550212145232/flor1.jpg"

return (
  <section className="content-sobre">
    <h1 className="title-sobre">Sobre Nós</h1>

    <div className="main">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sunt amet dicta deserunt eum deleniti eveniet odio est mollitia. Eius ea recusandae doloremque perspiciatis sed soluta quaerat iusto quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sunt amet dicta deserunt eum deleniti eveniet odio est mollitia.</p>
        <img className="img-sobre" src={urlImg1}/>
        <p className="texto2-sobre">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sunt amet dicta deserunt eum deleniti eveniet odio est mollitia. Eius ea recusandae doloremque perspiciatis sed soluta quaerat iusto quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sunt amet dicta deserunt eum deleniti eveniet odio est mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sunt amet dicta deserunt eum deleniti eveniet odio est mollitia. Eius ea recusandae doloremque perspiciatis sed soluta quaerat iusto quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident sunt amet dicta deserunt eum deleniti eveniet odio est mollitia.</p>
    </div>
  </section>
  )
}

export default SobreConent;