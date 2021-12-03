import React from 'react'
import { useState, useEffect } from 'react';
import FichaVista from './FichaVista.jsx'
import { UsarMem } from './ContextoMemotest.jsx';

const Tablero4x4 = () => {

    const memotest = UsarMem();
    const [fichasTablero4x4, setFichasTablero4x4] = useState(memotest.fichasTablero4x4)
    const [darVuelta, setDarVuelta] = useState(false);

    useEffect (() => {
        if (memotest.ficha1 !== null & (memotest.ficha2 !== null))   {
            chequearIgualdad();
            //memotest.setEstaCargando(false)
        }
    }, [memotest.ficha2]
    )
/* 
    useEffect (() => {
        if (memotest.ficha1 !== null & (memotest.ficha2 !== null))   {
            memotest.ficha1.estaOculta = true;
            memotest.ficha2.estaOculta = true;
        }
    }, [darVuelta]
    ) */
  
    const chequearIgualdad = () => {
      if (memotest.ficha1.codigo === memotest.ficha2.codigo) { 
          console.log("Acertaste!")
      } else {
          console.log("Intentalo de nuevo!");
          //memotest.setEstaCargando(!memotest.estaCargando);
          setDarVuelta(true);
      }
      /* mensaje acertaste
      Marcar punto
      } else { 
      mensaje intentalo de nuevo
      Hide frente
      Show back
      } */
    }
    
    const handleSubmit = event => {
        memotest.ficha1.estaOculta = true;
        memotest.ficha2.estaOculta = true;
    }

    return (
        <div className="container">
            { darVuelta ? (
                <div class="row p-0 m-0">
                    <div className="col">
                        Incorrecto, ¡intentalo de nuevo!
                    </div>
                </div>
            ) : ""}
            <div class="row p-0 m-0">
                {fichasTablero4x4.slice(0,4).map( ficha => FichaVista(ficha))}
            </div>
            <div class="row align-items-start  p-0 m-0">
                {fichasTablero4x4.slice(4,8).map( ficha => FichaVista(ficha))}
            </div>
        </div>
    )
    
}

export default Tablero4x4;