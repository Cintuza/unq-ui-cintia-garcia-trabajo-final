import React from 'react'
import { useState, useEffect } from 'react';
import FichaVista from './FichaVista.jsx'
import { UsarMem } from './ContextoMemotest.jsx';
import Fichas from "./Fichas/Fichas";
import back from './Fichas/back.png';

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
            setPartidaGanada(true);
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

    const onClick = () => {
        setFichasTablero4x4(Fichas());
        memotest.setPuntaje(0);
        setPartidaGanada(false);
    }

    return (
        <>

            <nav className="navbar navbar-success bg-success">
                <div className="container-fluid">
                    <div className="navbar-brand text-light fw-bold fs-3">
                    <img src={back} alt="" width="35" height="35" className="d-inline-block align-text-top me-3"/>
                    {/* <p className="text-light text-center fw-bold">Memotest</p> */}
                    Memotest
                    </div>
                </div>
            </nav>
        <div className="container-fluid mt-2">
            <div className="row align-items-center">
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
            <div className="col-md-3">
                { partidaGanada ? (
                    <div className="alert alert-success me-md-3" role="alert">
                        <div className="row justify-content-center pb-2">
                        ¡Ganaste!
                        </div>
                        <div className="row">
                        <button type="button" class="btn btn-success" onClick={onClick}>Nueva partida</button>
                        </div>
                    </div>
                ) : ""}

                <div className="row border rounded border-success border-3 justify-content-center me-md-3">
                    <p className="pt-2 text-success">
                        Puntaje: {memotest.puntaje}
                    </p>
                </div>
            </div>
            </div>
        </div>
        </>
    )
    
}

export default Tablero4x4;