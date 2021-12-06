import React from 'react'
import { useState, useEffect } from 'react';
import FichaVista from './FichaVista.jsx'
import { UsarMem } from './ContextoMemotest.jsx';
import Fichas from "./Fichas/Fichas";

const Tablero4x4 = () => {

    const memotest = UsarMem();
    const [fichasTablero4x4, setFichasTablero4x4] = useState(Fichas())
    const [darVuelta, setDarVuelta] = useState(false);
    const [acertaste, setAcertaste] = useState(false);
    const [partidaGanada, setPartidaGanada] = useState(false);

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
          setAcertaste(true);
          memotest.setPuntaje(memotest.puntaje + 1)
      } else {
          //memotest.setEstaCargando(true);
          setDarVuelta(true);
      }
      setTimeout(() => {
          memotest.setFicha1(null);
          memotest.setFicha2(null);
          setDarVuelta(false);
          setAcertaste(false);
          memotest.setEnabledButton(false);
          if (memotest.puntaje == 8) {
              setPartidaGanada(true);
          }
      }, 2000
      );
    }

    return (
        <div className="container">
            <div className="row  align-items-center">
            <div className="col">
            { darVuelta ? (
                <div class="alert alert-info" role="alert">
                    Incorrecto, ¡intentalo de nuevo!
                </div>
            ) : ""}
            { acertaste ? (
                <div className="alert alert-success" role="alert">
                    ¡Acertaste!
                </div>
            ) : ""}
            <div className="row justify-content-center p-0 m-0">
                {fichasTablero4x4.slice(0,4).map( ficha => FichaVista(ficha))}
            </div>
            <div className="row justify-content-center p-0 m-0">
                {fichasTablero4x4.slice(4,8).map( ficha => FichaVista(ficha))}
            </div>
            <div className="row justify-content-center p-0 m-0">
                {fichasTablero4x4.slice(8,12).map( ficha => FichaVista(ficha))}
            </div>
            <div className="row justify-content-center p-0 m-0">
                {fichasTablero4x4.slice(12,16).map( ficha => FichaVista(ficha))}
            </div>
            </div>
            <div className="col-md-auto">
                { partidaGanada ? (
                    <div className="alert alert-success" role="alert">
                        ¡Ganaste!
                    </div>
                ) : ""}

                <div className="row border rounded border-success border-3 justify-content-center">
                    <p className="pt-2 text-success">
                        Puntaje: {memotest.puntaje}
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
    
}

export default Tablero4x4;