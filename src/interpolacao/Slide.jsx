import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {

  const urlImg1 = "https://cdn.discordapp.com/attachments/1021540396381261985/1100127550212145232/flor1.jpg"
  const urlImg2 = "https://cdn.discordapp.com/attachments/1021540396381261985/1100127550983913492/flor3.jpg"
  const urlImg3 = "https://cdn.discordapp.com/attachments/1021540396381261985/1100127551323635783/flor2.jpg"

  return (
    <Carousel>
      <Carousel.Item>
        <img width={1920} height={700} src={urlImg1}/>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1920} height={700} src={urlImg2}/>
      </Carousel.Item>
      <Carousel.Item>
        <img width={1920} height={700} src={urlImg3}/>
      </Carousel.Item>
    </Carousel>
  )
}

export default UncontrolledExample;