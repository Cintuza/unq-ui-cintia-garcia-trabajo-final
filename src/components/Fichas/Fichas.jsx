import simone from './simone.jpeg'
import diana from './diana.jpeg'
import lohana from './lohana.jpg'
import jauregui from './jauregui.png'

const Fichas = () => {
    
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

    const fichasTablero4x4SinOrdenar = [ficha0]
    const fichasTablero4x4 = fichasTablero4x4SinOrdenar.sort(funcion)

    const funcion = (a, b) => {  
        return 0.5 - Math.random();
      }  
}

export default Fichas;