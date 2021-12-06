import { useState, useEffect } from "react";
import back from './Fichas/back.png';
import { UsarMem } from './ContextoMemotest.jsx';

const FichaVista = (ficha) => {

    const memotest = UsarMem();

    const handleSubmit = event => {
        console.log(memotest.ficha2);
        if (memotest.ficha1 === null) {
            ficha.estaOculta = false;
            memotest.setFicha1(ficha);
        } else if (memotest.ficha1 !== null & (memotest.ficha2 === null)) {
            ficha.estaOculta = false;
            memotest.setFicha2(ficha);
        } else {
            console.log("Ya elegiste dos fichas");
        }
    }

    return (
        <div className="col-2 text-center border p-1 m-0">
            <button className="btn" type="button" onClick={handleSubmit} disabled={memotest.enabledButton | !ficha.estaOculta}>
            {ficha.estaOculta ? (
                <img src={back} className="img-fluid p-0 m-0" width="160" alt="..."></img>
            ) : (
                <img src={ficha.imagen} className="img-fluid p-0 m-0" width="160" alt="..."></img>
            )}
            </button>
        </div>
    )
}

export default FichaVista;