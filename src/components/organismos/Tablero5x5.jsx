import FichaVista from './FichaVista.jsx'
import { UsarMem } from '../ContextoMemotest.jsx';
import memotestFicha from '../Fichas/memotest.jpg'

const Tablero5x5 = () => {
    const memotest = UsarMem();

    return (
        <>
            <div className="row justify-content-center p-0 m-0">
                {memotest.fichasTablero.slice(0,5).map( ficha => FichaVista(ficha))}
            </div>
            <div className="row justify-content-center p-0 m-0">
                {memotest.fichasTablero.slice(5,10).map( ficha => FichaVista(ficha))}
            </div>
            <div className="row justify-content-center p-0 m-0">
                {memotest.fichasTablero.slice(10,12).map( ficha => FichaVista(ficha))}
                <div className="col text-center border p-1 m-0">
                    <img src={memotestFicha} className="img-fluid p-0 m-0" width="130" alt="..."></img>
                </div>
                {memotest.fichasTablero.slice(12,14).map( ficha => FichaVista(ficha))}
            </div>
            <div className="row justify-content-center p-0 m-0">
                {memotest.fichasTablero.slice(14,19).map( ficha => FichaVista(ficha))}
            </div>
            <div className="row justify-content-center p-0 m-0">
                {memotest.fichasTablero.slice(19,24).map( ficha => FichaVista(ficha))}
            </div>
        </>
    )

}

export default Tablero5x5;