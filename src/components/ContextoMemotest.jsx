import React from 'react'
import { useState } from "react";
import Fichas from './Fichas/Fichas';

const memContextType = {
    fichasTablero : [],
    setFichasTablero : () => {},
    ficha1 : null,
    setFicha1 : () => {},
    ficha2 : null,
    setFicha2 : () => {},
    estaCargando : false,
    setEstaCargando : () => {},
    enabledButton : false,
    setEnabledButton : () => {},
    puntaje : 0,
    setPuntaje : () => {},
    partidaGanada : false, 
    setPartidaGanada : () => {},
    tamanioTablero : '',
    setTamanioTablero : () => {},
    fichasTablero4x4 : () => {},
    fichasTablero5x5 : () => {},
    fichasTablero8x8 : () => {},
  }
  
const ContextoMem = React.createContext(memContextType);
  
export const ProveedorMem = ({children}) => {
    const [fichasTablero, setFichasTablero] = useState([]);
    const [ficha1, setFicha1] = useState(null);
    const [ficha2, setFicha2] = useState(null);
    const [estaCargando, setEstaCargando] = useState({});
    const [enabledButton, setEnabledButton] = useState (false);
    const [puntaje, setPuntaje] = useState (0);
    const [partidaGanada, setPartidaGanada] = useState(false);
    const [tamanioTablero, setTamanioTablero] = useState('');

    const fichasTablero4x4 = () => {
        var fichasTotal = Fichas().slice(0,16);
        return fichasTotal.sort(funcion)
    }

    const fichasTablero5x5 = () => {
        var fichasTotal = Fichas().slice(0,24);
        return fichasTotal.sort(funcion)
    }

    const fichasTablero8x8 = () => {
        var fichasTotal = Fichas();
        return fichasTotal.sort(funcion)
    }

    const funcion = (a, b) => {  
        return 0.5 - Math.random();
    }

    const value = {fichasTablero, setFichasTablero, ficha1, setFicha1, ficha2, 
        setFicha2, estaCargando, setEstaCargando, enabledButton, setEnabledButton, 
        puntaje, setPuntaje, partidaGanada, setPartidaGanada, tamanioTablero, 
        setTamanioTablero, fichasTablero4x4, fichasTablero5x5, fichasTablero8x8}
  
    return <ContextoMem.Provider value={value}>{children}</ContextoMem.Provider>
}
  
export const UsarMem = () => {
    return React.useContext(ContextoMem);
}