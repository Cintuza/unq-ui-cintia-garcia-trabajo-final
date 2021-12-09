import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { UsarMem } from '../ContextoMemotest.jsx';
import cuatro from './4x4.jpg';
import cinco from './5x5.jpg';
import ocho from './8x8.jpg';

const NuevaPartida = () => {

    const navigate = useNavigate();
    const memotest = UsarMem();

    useEffect (() => {
        console.log(memotest.tamanioTablero)
        if (memotest.tamanioTablero === '4x4') {
            memotest.setFichasTablero(memotest.fichasTablero4x4)
        } else if (memotest.tamanioTablero === '5x5') {
            memotest.setFichasTablero(memotest.fichasTablero5x5)
        } else if (memotest.tamanioTablero === '8x8') {
            memotest.setFichasTablero(memotest.fichasTablero8x8)
    }
    }, [memotest.tamanioTablero]
    )

    const irATablero = (tamanio) => {
        memotest.setTamanioTablero(tamanio);
        setTimeout(() => {
            navigate('tablero');
        }, 2000
        );
    }

    return (
        <>
        <div className="row justify-content-center m-3">
            <div className="col-6">
                <p className="fs-3">Elegí el tamaño del tablero:</p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-2">
                <button className="btn p-0" type="button" onClick={() => { irATablero('4x4')}} >
                <img src={cuatro} className="img-fluid p-0 m-0" width="130" alt="..."></img>
                </button>
            </div>
            <div className="col-2">
                <button className="btn p-0" type="button" onClick={() => { irATablero('5x5')}} >
                <img src={cinco} className="img-fluid p-0 m-0" width="130" alt="..."></img>
                </button>
            </div>
            <div className="col-2">
                <button className="btn p-0" type="button" onClick={() => { irATablero('8x8')}} >
                <img src={ocho} className="img-fluid p-0 m-0" width="130" alt="..."></img>
                </button>
            </div>
        </div>
        </>
    )
}

export default NuevaPartida;