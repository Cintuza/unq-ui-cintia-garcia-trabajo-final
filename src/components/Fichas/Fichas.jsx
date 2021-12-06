import simone from './simone.jpeg'
import diana from './diana.jpeg'
import lohana from './lohana.jpg'
import jauregui from './jauregui.png'
import dora from './dora.jpeg'
import emma from './emma.jpg'
import flora from './flora.jpeg'
import pasionaria from './pasionaria.jpeg'
import simoneNombre from './simoneNombre.jpg'
import dianaNombre from './dianaNombre.jpg'
import lohanaNombre from './lohanaNombre.jpg'
import jaureguiNombre from './jaureguiNombre.jpg'
import doraNombre from './doraNombre.jpg'
import emmaNombre from './emmaNombre.jpg'
import floraNombre from './floraNombre.jpg'
import pasionariaNombre from './pasionariaNombre.jpg'

const Fichas = () => {
    
    const ficha0 = { //<Ficha codigo="simone" imagen={simone}/>
        estaOculta : true,
        codigo : "simone",
        imagen : simone
    }
    const ficha1 = {
        estaOculta : true,
        codigo : "diana",
        imagen : diana
    }
    const ficha2 = {
        estaOculta : true,
        codigo : "lohana",
        imagen : lohana
    }
    const ficha3 = {
        estaOculta : true,
        codigo : "jauregui",
        imagen : jauregui
    }
    const ficha4 = {
        estaOculta : true,
        codigo : "flora",
        imagen : flora
    }
    const ficha5 = {
        estaOculta : true,
        codigo : "emma",
        imagen : emma
    }
    const ficha6 = {
        estaOculta : true,
        codigo : "dora",
        imagen : dora
    }
    const ficha7 = {
        estaOculta : true,
        codigo : "pasionaria",
        imagen : pasionaria
    }
    const ficha8 = {
        estaOculta : true,
        codigo : "simone",
        imagen : simoneNombre
    }
    const ficha9 = {
        estaOculta : true,
        codigo : "diana",
        imagen : dianaNombre
    }
    const ficha10 = {
        estaOculta : true,
        codigo : "lohana",
        imagen : lohanaNombre
    }
    const ficha11 = {
        estaOculta : true,
        codigo : "jauregui",
        imagen : jaureguiNombre
    }
    const ficha12 = {
        estaOculta : true,
        codigo : "flora",
        imagen : floraNombre
    }
    const ficha13 = {
        estaOculta : true,
        codigo : "emma",
        imagen : emmaNombre
    }
    const ficha14 = {
        estaOculta : true,
        codigo : "dora",
        imagen : doraNombre
    }
    const ficha15 = {
        estaOculta : true,
        codigo : "pasionaria",
        imagen : pasionariaNombre
    }

    const fichasTablero4x4SinOrdenar = [ficha0, ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, 
        ficha8, ficha9, ficha10, ficha11, ficha12, ficha13, ficha14, ficha15]

    const fichasTablero4x4 = () => {
        return fichasTablero4x4SinOrdenar.sort(funcion)
    }

    const funcion = (a, b) => {  
        return 0.5 - Math.random();
    }

    return (fichasTablero4x4);
}


export default Fichas;