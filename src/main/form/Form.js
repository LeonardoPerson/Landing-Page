import './form.css'
import {useState} from 'react'

const Form = () => {
  const [enviou, setEnviou] = useState(false)
    if(enviou){
      return(
        <div className="form">
          <div className="send-warning">Sua mensagem foi enviada!</div>
          <input className="form-button" onClick={() => setEnviou(!enviou)} type="button" value="VOLTAR"/>
        </div>
      )
    } 
  

  return(
    <section className="section2">
      <form className="form">
        <p className="form-title">FORMULÁRIO</p>
        <p className="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <div className="form-input">
          <input className="input-text" type="text" placeholder="Nome"/>
          <input className="input-email" type="email" placeholder="Email" /><br/>
        </div>
        <textarea className="textarea" placeholder="Mensagem"></textarea>
        <input className="form-button" onClick={() => setEnviou(!enviou)} type="button" value="ENVIAR"/>
      </form>
    </section>
  )
}

export default Form