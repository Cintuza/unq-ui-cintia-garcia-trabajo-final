import simone from './simone.jpeg'
import diana from './diana.jpeg'
import lohana from './lohana.jpg'
import jauregui from './jauregui.png'
import dora from './dora.jpeg'
import emma from './emma.jpg'
import flora from './flora.jpeg'
import pasionaria from './pasionaria.jpeg'

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
    const ficha4 = {
        codigo : "flora",
        imagen : flora
    }
    const ficha5 = {
        codigo : "emma",
        imagen : emma
    }
    const ficha6 = {
        codigo : "dora",
        imagen : dora
    }
    const ficha7 = {
        codigo : "pasionaria",
        imagen : pasionaria
    }

    const fichasTablero4x4SinOrdenar = [ficha0, ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7]
    const fichasTablero4x4 = () => {
        return fichasTablero4x4SinOrdenar.sort(funcion)
    }

    const funcion = (a, b) => {  
        return 0.5 - Math.random();
      }

    return (fichasTablero4x4);
}


export default Fichas;