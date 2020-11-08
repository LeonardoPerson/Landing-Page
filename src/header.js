
import barImage from './image/barImage.png'
import mulher from './image/mulher.png'
import pena1 from './image/pena1.png'
import pena2 from './image/pena2.png'
import pena3 from './image/pena3.png'
import pena4 from './image/pena4.png'

const Header = () => {
  return(
    <header className="header">

      <div className="super-bar">
        <img src={barImage} alt="icone supergiantesgame"/>
        <div className="super-bar-title">SUPERGIANTSGAME</div>  
      </div>

      <div className="header2">
        <div className="grupo1-penas">
          <img src={pena1}/>
          <img src={pena2}/>
        </div>
        <div className="card-header">
          <div className="text-card-top">TRANSISTOR - RED THE SINGER</div>
          <img className="card-mulher" src={mulher} alt="desenho de mulher"/>
          <div className="text-card-bottom">
            "Olha, o que quer que você <br/>
             esteja pensando, me faça <br/> 
             um favor, não solte."
          </div>
        </div>
        <div className="grupo2-penas">
          <img src={pena3}/>
          <img src={pena4}/>
        </div>
      </div>
    </header>
  )
}

export default Header