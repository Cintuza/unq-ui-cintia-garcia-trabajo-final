import React from 'react'
import { useState } from "react";
import Fichas from "./Fichas/Fichas";

const memContextType = {
    fichasTablero4x4 : [],
    setFichasTablero4x4 : () => {},
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
  }
  
const ContextoMem = React.createContext(memContextType);
  
export const ProveedorMem = ({children}) => {
    const [fichasTablero4x4, setFichasTablero4x4] = useState(Fichas());
    const [ficha1, setFicha1] = useState(null);
    const [ficha2, setFicha2] = useState(null);
    const [estaCargando, setEstaCargando] = useState({});
    const [enabledButton, setEnabledButton] = useState (false);
    const [puntaje, setPuntaje] = useState (0);
  
    const value = {fichasTablero4x4, setFichasTablero4x4, ficha1, setFicha1, ficha2, setFicha2, estaCargando, setEstaCargando, enabledButton, setEnabledButton, puntaje, setPuntaje};
  
    return <ContextoMem.Provider value={value}>{children}</ContextoMem.Provider>
}
  
export const UsarMem = () => {
    return React.useContext(ContextoMem);
}