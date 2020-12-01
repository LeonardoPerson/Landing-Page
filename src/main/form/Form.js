import './form.css'
import {useState} from 'react'

const Form = () => {
  const [enviou, setEnviou] = useState(false)
  const [email, setEmail] = useState('')

 
    if(enviou){
      return(
        <div className="section2">
          <div className="form">
            <div className="send-warning">Sua mensagem foi enviada!</div>
            <input className="form-button-warning" onClick={() => setEnviou(!enviou)} type="button" value="VOLTAR"/>
          </div>
        </div>
      )
    }   

  return(
    <section className="section2">
      <form className="form" onSubmit={() => setEnviou(!enviou)}>
        <p className="form-title">FORMULÁRIO</p>
        <p className="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <div className="form-input">
          <input className="input-text" type="text" placeholder="Nome" required="required"/>
          <input className="input-email" type="email" placeholder="Email" required="required"/><br/>
        </div>
        <textarea className="textarea" placeholder="Mensagem" required="required" maxLength="300"></textarea>
        <input className="form-button" type='submit' value="ENVIAR"/>
      </form>
      {console.log(email)}
    </section>
  )
}

export default Form