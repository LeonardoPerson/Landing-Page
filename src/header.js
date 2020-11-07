
import barImage from './image/barImage.png'
import card from './image/card.png'

const Header = () => {
  return(
    <header className="header">
      <div className="super-bar">
        <img src={barImage} alt="icone supergiantesgame"/>
        <div className="super-bar-title">SUPERGIANTSGAME</div>  
      </div>
      <div className="header2">
        <div className="card-header"></div>
      </div>
    </header>
  )
}

export default Header