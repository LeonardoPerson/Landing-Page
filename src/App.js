//import './App.css';
import barImage from './image/barImage.png'

const App = () => {
  return (
    <div className="grid-container">
      <header className="header">
        <div className="super-bar">
          <img src={barImage}/>
          <div className="super-bar-title">SUPERGIANTSGAME</div>  
        </div>
      </header>
      <div className="container">
        <section className="section1">section1</section>
        <section className="section2">section2</section>
        <footer className="footer">footer</footer>
      </div>
    </div>
  );
}

export default App;
