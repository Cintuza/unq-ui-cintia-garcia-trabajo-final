import React from 'react'
import { useState, useEffect } from 'react';
import { UsarMem } from '../ContextoMemotest.jsx';
import AlertaIncorrecto from '../atomos/AlertaIncorrecto'
import AlertaAcertaste from '../atomos/AlertaAcertaste'
import Tablero4x4 from '../organismos/Tablero4x4.jsx';
import CuadroDePartidaGanada from '../moleculas/CuadroDePartidaGanada'
import Puntaje from '../atomos/Puntaje'
import Tablero5x5 from '../organismos/Tablero5x5.jsx';
import Tablero8x8 from '../organismos/Tablero8x8.jsx';

const Tablero = () => {

    const memotest = UsarMem();
    const [darVuelta, setDarVuelta] = useState(false);
    const [acertaste, setAcertaste] = useState(false);

    useEffect (() => {
        if (memotest.ficha1 !== null & (memotest.ficha2 !== null))   {
            memotest.setEnabledButton(true);
            chequearIgualdad();
        }
    }, [memotest.ficha2]
    )

    useEffect (() => {
        if (memotest.ficha1 !== null & (memotest.ficha2 !== null))   {
            memotest.ficha1.estaOculta = true;
            memotest.ficha2.estaOculta = true;
        }
    }, [darVuelta]
    )

    useEffect (() => {
        if (memotest.tamanioTablero === "4x4" & memotest.puntaje === 8) {
            memotest.setPartidaGanada(true);
        } else if (memotest.tamanioTablero === "5x5" & memotest.puntaje === 12) {
            memotest.setPartidaGanada(true);
        } else if (memotest.tamanioTablero === "8x8" & memotest.puntaje === 32) {
            memotest.setPartidaGanada(true);
        } 
    }, [memotest.puntaje]
    )
  
    const chequearIgualdad = () => {
      if (memotest.ficha1.codigo === memotest.ficha2.codigo) {
          setAcertaste(true);
          memotest.setPuntaje(memotest.puntaje + 1)
      } else {
          setDarVuelta(true);
      }
      setTimeout(() => {
          memotest.setFicha1(null);
          memotest.setFicha2(null);
          setDarVuelta(false);
          setAcertaste(false);
          memotest.setEnabledButton(false);
      }, 2000
      );
    }


    return (
        <>
        <div className="container-fluid mt-2">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-5 ms-md-3 me-md-3">
                    { (memotest.tamanioTablero == '4x4') ? (
                        <Tablero4x4/>
                    ) : ((memotest.tamanioTablero == '5x5') ? (
                            <Tablero5x5/>
                        ) : 
                        (<Tablero8x8/>)
                    )
                    }
                </div>
                <div className="col-md-3">
                    { darVuelta ? (
                        <AlertaIncorrecto/>
                    ) : ""}
                    { acertaste ? (
                        <AlertaAcertaste/>
                    ) : ""}
                    { memotest.partidaGanada ? (
                        <CuadroDePartidaGanada/>
                    ) : ""}
                    <Puntaje/>
                </div>
            </div>
        </div>
        </>
    )
    
}

export default Tablero;