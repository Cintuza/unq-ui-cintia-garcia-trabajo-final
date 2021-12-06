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
            memotest.setEnabledButton(true);
            chequearIgualdad();
            //memotest.setEstaCargando(false)
        }
    }, [memotest.ficha2]
    )

    useEffect (() => {
        if (memotest.ficha1 !== null & (memotest.ficha2 !== null))   {
            memotest.ficha1.estaOculta = true;
            memotest.ficha2.estaOculta = true;
        }
        console.log(memotest.ficha2);
    }, [darVuelta]
    )
  
    const chequearIgualdad = () => {
      if (memotest.ficha1.codigo === memotest.ficha2.codigo) { 
          console.log("Acertaste!")
      } else {
          console.log("Intentalo de nuevo!");
          //memotest.setEstaCargando(true);
          setDarVuelta(true);
      }
      setTimeout(() => {
          memotest.setFicha1(null);
          memotest.setFicha2(null);
          setDarVuelta(false);
          memotest.setEnabledButton(false);
      }, 2000
      );
      /* mensaje acertaste
      Marcar punto
      } else { 
      mensaje intentalo de nuevo
      Hide frente
      Show back
      } */
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
            <div class="row align-items-start  p-0 m-0">
                {fichasTablero4x4.slice(8,12).map( ficha => FichaVista(ficha))}
            </div>
            <div class="row align-items-start  p-0 m-0">
                {fichasTablero4x4.slice(12,16).map( ficha => FichaVista(ficha))}
            </div>
        </div>
    )
    
}

export default Tablero4x4;