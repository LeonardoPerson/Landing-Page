/*Aqui possui toda a estrutura do carrossel de personagens*/

import white from '../../image/white.jpg'
import character from './character'
//port Slider from 'infinite-react-carousel';
import './carousel.css'
import Carousel from 'react-elastic-carousel';


const CarouselComponent = () => {
  return(
    <section className="section1">   
        <img className="button-white" src={white} alt="botao-branco"/>
        <div className="button-arrow"></div>
        <div className="left-arrow"></div>  
        <div className='image-car'>
        <Carousel focusOnSelect={false} itemsToShow={3} pagination={false} disableArrowsOnEnd={false}> 
        {character.map((item, index) =>               
          <div key={index} className='image-container'>                        
              <img className='image' src={item.img}/>            
          </div>                  
        )} 
        </Carousel>     
        </div> 

        <div className="right-arrow"></div>      
    </section>
  )
}

export default CarouselComponent