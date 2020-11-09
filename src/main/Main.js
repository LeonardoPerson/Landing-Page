/*Este compomente unifica os arquivos Carousel.js e Form.js*/

import Carousel from './carousel/Carousel'
import Form from './form/Form'

const Main = () => {
  return (
    <main className="main">
      <Carousel />
      <Form />      
    </main>
  )
}

export default Main