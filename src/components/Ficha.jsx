import { useEffect, useState } from "react";
import back from './Fichas/back.png';
import { UsarMem } from './ContextoMemotest.jsx';
import simone from './Fichas/simone.jpeg'

const Ficha = (ficha) => {

    const memotest = UsarMem();
    const [estaOculta, setEstaOculta] = useState(true);

    useEffect (() => {
        console.log(memotest.ficha1)
    }, [memotest.ficha1]

    )

    const handleSubmit = event => {
        memotest.setEstaCargando(true);
        memotest.setFicha1(ficha);
        setEstaOculta(false);
        console.log(ficha);
        /* if (memotest.ficha1 != {}) {
            setEstaOculta(false);
            memotest.setFicha1(ficha);
        } else if (memotest.ficha1 == {} & (memotest.ficha2 == {})) {
            setEstaOculta(false);
            memotest.setFicha2(ficha);
        } else {
            console.log("Ya elegiste dos fichas")
        } */
    }

    return (
        <div className="col-2 text-center border p-1 m-0">
            <button className="btn" type="button" onClick={handleSubmit}>
            {estaOculta ? (
                <img src={back} className="img-fluid p-0 m-0" width="160" alt="..."></img>
            ) : (
                <img src={ficha.imagen} className="img-fluid p-0 m-0" width="160" alt="..."></img>
            )}
            </button>
        </div>
    )
}

export default Ficha;