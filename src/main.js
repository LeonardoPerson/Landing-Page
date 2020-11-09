import white from './image/white.jpg'
import grant from './image/grant.png'
import red from './image/red.png'
import sybil from './image/sybil.png'

const Main = () => {
  return (
    <main className="main">
      <section className="section1">
        <img className="button-white" src={white} alt="botao-branco"/>
        <div className="button-arrow"></div>
        <div className="left-arrow"></div>
        <div className="grant-containter">
          <div className="grant-background">
            <img className="grant" src={grant}/>
          </div>
          <p>A Camerata foi apenas os dois <br/>
             no início, e suas fileiras nunca foram <br/>
             destinadas a exceder um número <br/>
             a ser contado em uma mão.
          </p>
        </div>

        <div className="red-container">
          <div className="red-background">
            <img className="red" src={red}/>
          </div>
          <p>Red, uma jovem cantora, entrou <br/>
             em posse do Transistor. Sendo a <br/>
             poderosa espada falante. O grupo <br/>
             Possessores quer tanto ela quanto <br/>
             o Transistor e está perseguindo <br/>
             implacavelmente a sua procura.
          </p>
        </div>

        <div className="sybil-container">
          <div className="sybil-background">
            <img className="sybil" src={sybil}/>
          </div>
          <p>
            Sybil é descrita pelo Transistor <br/>
            como sendo os "olhos e ouvidos" <br/>
            da Camerata.
          </p>
        </div>
        <div className="right-arrow"></div>
      </section>
      <section className="section2">
        section2
      </section>
      <footer className="footer">footer</footer>
    </main>
  )
}

export default Main