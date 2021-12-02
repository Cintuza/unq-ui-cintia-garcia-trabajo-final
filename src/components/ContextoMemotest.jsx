import React from 'react'
import { useState } from "react";
import Fichas from "./Fichas/Fichas";

const memContextType = {
    fichasTablero4x4 : [],
    setFichasTablero4x4 : () => {},
    ficha1 : {},
    setFicha1 : () => {},
    ficha2 : {},
    setFicha2 : () => {},
    estaCargando : false,
    setEstaCargando : () => {},
  }
  
const ContextoMem = React.createContext(memContextType);
  
export const ProveedorMem = ({children}) => {
    const [fichasTablero4x4, setFichasTablero4x4] = useState(Fichas());
    const [ficha1, setFicha1] = useState({});
    const [ficha2, setFicha2] = useState({});
    const [estaCargando, setEstaCargando] = useState({});
  
    const value = {fichasTablero4x4, setFichasTablero4x4, ficha1, setFicha1, ficha2, setFicha2, estaCargando, setEstaCargando};
  
    return <ContextoMem.Provider value={value}>{children}</ContextoMem.Provider>
}
  
export const UsarMem = () => {
    return React.useContext(ContextoMem);
}