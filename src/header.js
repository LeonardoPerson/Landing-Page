
import barImage from './image/barImage.png'

const Header = () => {
  return(
    <header className="header">
      <div className="super-bar">
        <img src={barImage}/>
        <div className="super-bar-title">SUPERGIANTSGAME</div>  
      </div>
    </header>
  )
}

export default Header