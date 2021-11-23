import './style.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  const estilos = {
    border: "2px red solid" ,
    margintop: "50px"
  }

  const titulo = "hola profe"

  return (
    <div classname="mi-app">

      <NavBar/>
      <ItemListContainer greeting="hola profe"/>
      <ItemDetailContainer/>

      <h2>{ titulo }</h2>
      <hr/>

      <section style={estilos}>
        <p>lorem <br/>ipsum</p>
      </section>
    </div>
  );

}

export default App;
