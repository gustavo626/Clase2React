import './style.css'
import NavBar from './components/NavBar'

function App() {

  const estilos = {
    border: "2px red solid" ,
    margintop: "50px"
  }

  const titulo = "hola profe"

  return (
    <div classname="mi-app">

      <NavBar/>

      <h2>{ titulo }</h2>
      <hr/>

      <section style={estilos}>
        <p>lorem <br/>ipsum</p>
      </section>
    </div>
  );

}

export default App;
