/*Este arquivo reúne os 3 componentes principais: Header, Main e Footer*/

import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import './index.css';

const App = () => {
  return (
    <div className="grid-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
