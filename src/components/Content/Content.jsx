 
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../styles/Content/Content.scss';
export function Content() {
 return(
<div className='Content'>
  <Carousel fade  >
  <Carousel.Item interval={5000}>
 
      <img
   
      src="https://i.postimg.cc/659gtfPQ/slide.png"
   
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Sus pesadillas</h3>
      <p>Lo dibuja todo</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
    
      src="https://i.postimg.cc/c499ZyYD/side2.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Vergvoktre usa tinta y pintura</h3>
      <p>Artísticas representaciones del infierno</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
     
      src="https://i.postimg.cc/SQD6wLbq/slide3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>El Infierno en la tierra</h3>
      <p>Si quieres sufrir, vive</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
 )
}
