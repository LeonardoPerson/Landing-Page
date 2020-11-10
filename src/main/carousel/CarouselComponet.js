/*Aqui possui toda a estrutura do carrossel de personagens*/
/*Os personagens são importados do arquivo 'character'*/

import white from '../../image/white.jpg'
import character from './character'
//port Slider from 'infinite-react-carousel';
import './carousel.css'

const CarouselComponent = () => {
  return(
    <section className="section1">   
        <img className="button-white" src={white} alt="botao-branco"/>
        <div className="button-arrow"></div>
        <div className="left-arrow"></div>       
            {character.map((item, index) =>          
              <div key={index} className={`${item.name}-container`}>
                <div className={`${item.name}-background`}>            
                  <img className={item.name} src={item.img}/>              
                </div>
                <p className="character-text">{item.text}</p>
              </div>         
            )}      

        <div className="right-arrow"></div>      
      </section>
  )
}

export default CarouselComponent