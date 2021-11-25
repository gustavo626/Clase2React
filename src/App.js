import './style.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-roter-dom';
import { CartView } from './components/CartView/CartView';
import { AppRouter } from './router/AppRouter';

function App() {

  const estilos = {
    border: "2px red solid" ,
    margintop: "50px"
  }

  const titulo = "hola profe"

  return (
      <BrowserRouter>


      <NavBar/>

      <AppRouter/>
    
        {/* <Footer/> */}


      </BrowserRouter>

  );

}

export default App;
