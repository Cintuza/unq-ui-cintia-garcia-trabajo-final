import { useState, useEffect } from "react";
import back from './Fichas/back.png';
import { UsarMem } from './ContextoMemotest.jsx';

const FichaVista = (ficha) => {

    const memotest = UsarMem();
    const [estaOculta, setEstaOculta] = useState(true);

    /* useEffect (() => {
        if (memotest.ficha1 !== null & (memotest.ficha2 !== null))   {
            memotest.ficha1.estaOculta = true;
            memotest.ficha2.estaOculta = true;
        }
    }, [memotest.estaCargando]
    ) */

    const handleSubmit = event => {
        if (memotest.ficha1 === null) {
            ficha.estaOculta = false;
            memotest.setFicha1(ficha);
        } else if (memotest.ficha1 !== null & (memotest.ficha2 === null)) {
            ficha.estaOculta = false;
            memotest.setFicha2(ficha);
        } else {
            console.log("Ya elegiste dos fichas")
            console.log(memotest.ficha1.estaOculta);
            console.log(memotest.ficha2.estaOculta);
            memotest.ficha1.estaOculta = true;
        }
        console.log(ficha);
        console.log(memotest.ficha1);
        console.log(memotest.ficha2);
    }

    return (
        <div className="col-2 text-center border p-1 m-0">
            <button className="btn" type="button" onClick={handleSubmit}>
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