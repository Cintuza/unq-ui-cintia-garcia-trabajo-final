import React from 'react'
import { useState, useEffect } from 'react';
import { UsarMem } from './ContextoMemotest.jsx';

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
        if (memotest.puntaje == 8) {
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
        <Encabezado/>
        <div className="container-fluid mt-2">
            <div className="row align-items-center">
                <div className="col">
                    { darVuelta ? (
                        <AlertaIncorrecto/>
                    ) : ""}
                    { acertaste ? (
                        <AlertaAcertaste/>
                    ) : ""}
                    <Tablero4x4/>
                </div>
                <div className="col-md-3">
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