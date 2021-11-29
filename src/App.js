import logo from './logo.svg';
import './App.css';
import Fichas from './components/Fichas/Fichas.jsx'
import simone from './components/Fichas/simone.jpeg'
import diana from './components/Fichas/diana.jpeg'
import lohana from './components/Fichas/lohana.jpg'
import jauregui from './components/Fichas/jauregui.png'

const App = () => {

  const fichas = [logo, logo, logo, logo, logo, logo, logo];

  
  const ficha0 = {
    codigo : "simone",
    imagen : simone
}
const ficha1 = {
    codigo : "diana",
    imagen : diana
}
const ficha2 = {
    codigo : "lohana",
    imagen : lohana
}
const ficha3 = {
    codigo : "jauregui",
    imagen : jauregui
}

const funcion = (a, b) => {  
  return 0.5 - Math.random();
}
const fichasTablero4x4SinOrdenar = [ficha0, ficha1, ficha2, ficha3]
const fichasTablero4x4 = fichasTablero4x4SinOrdenar.sort(funcion)








  return (
    <div className="container">



  <div class="row align-items-start  p-0 m-0">
    {fichasTablero4x4.map( ficha => <div className="col-auto p-1 m-0">
        <img src={ficha.imagen} className="img-fluid p-0 m-0" width="160" alt="..."></img>
        </div>)}
  </div>

{/* 
      <div className="row">
        <div className="col-2 p-0 m-0">
        <img src={logo} className="img-fluid p-0 m-0" width="150" alt="..."></img>
        </div>
        <div className="col-2 p-0 m-0">
        <img src="https://pbs.twimg.com/profile_images/745914996123643904/UGqutrlf_400x400.jpg" width="150" className="img-fluid p-0 m-0" alt="..."></img>
        </div>
        <div className="col-2">
        <img src={logo} className="img-fluid" width="80" alt="..."></img>
        </div>
        <div className="col-2">
        <img src={logo} className="img-fluid" width="80" alt="..."></img>
        </div>
      </div>

  <div class="row align-items-start">
    {fichas.slice(0,4).map( ficha => <div className="col-2">
        <img src={ficha} className="img-fluid" width="80" alt="..."></img>
        </div>)}
  </div> */}

  </div>
  );




}

export default App;
