import FichaVista from './FichaVista.jsx'
import { UsarMem } from '../ContextoMemotest.jsx';

const Tablero4x4 = () => {
    const memotest = UsarMem();

    return (
        <>
        <div className="row justify-content-center p-0 m-0">
            {memotest.fichasTablero.slice(0,4).map( ficha => FichaVista(ficha))}
        </div>
        <div className="row justify-content-center p-0 m-0">
            {memotest.fichasTablero.slice(4,8).map( ficha => FichaVista(ficha))}
        </div>
        <div className="row justify-content-center p-0 m-0">
            {memotest.fichasTablero.slice(8,12).map( ficha => FichaVista(ficha))}
        </div>
        <div className="row justify-content-center p-0 m-0">
            {memotest.fichasTablero.slice(12,16).map( ficha => FichaVista(ficha))}
        </div>
        </>
    )

}

export default Tablero4x4;