import React from 'react'
import { useState } from 'react';
import Ficha from './Ficha.jsx'
import { UsarMem } from './ContextoMemotest.jsx';

const Tablero4x4 = () => {

    const memotest = UsarMem();
    const [fichasTablero4x4, setFichasTablero4x4] = useState(memotest.fichasTablero4x4)
    
    //const [ficha1, setFicha1] = useState({})

    return (
        <div className="container">
            <div class="row p-0 m-0">
                {fichasTablero4x4.slice(0,4).map( ficha => Ficha(ficha))}
            </div>
            <div class="row align-items-start  p-0 m-0">
                {fichasTablero4x4.slice(4,8).map( ficha => Ficha(ficha))}
            </div>
        </div>
    )
    
}

export default Tablero4x4;