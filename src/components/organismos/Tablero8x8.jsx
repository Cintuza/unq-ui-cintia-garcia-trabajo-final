import FichaVista from './FichaVista.jsx'
import { UsarMem } from '../ContextoMemotest.jsx';

const Tablero8x8 = () => {
    const memotest = UsarMem();

    return (
        <>
            <div className="row justify-content-center p-0 m-0">
                <div className="col">
                    <div className="row justify-content-end">
                        {memotest.fichasTablero.slice(0,4).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {memotest.fichasTablero.slice(4,8).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
            </div>
            <div className="row justify-content-center p-0 m-0">
                <div className="col">
                    <div className="row justify-content-end">
                        {memotest.fichasTablero.slice(8,12).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {memotest.fichasTablero.slice(12,16).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
            </div>
            <div className="row justify-content-center p-0 m-0">
                <div className="col">
                    <div className="row justify-content-end">
                        {memotest.fichasTablero.slice(16,20).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {memotest.fichasTablero.slice(20,24).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
            </div>
            <div className="row justify-content-center p-0 m-0">
                <div className="col">
                    <div className="row justify-content-end">
                        {memotest.fichasTablero.slice(24,28).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {memotest.fichasTablero.slice(28,32).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
            </div>
            <div className="row justify-content-center p-0 m-0">
                <div className="col">
                    <div className="row justify-content-end">
                        {memotest.fichasTablero.slice(32,36).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {memotest.fichasTablero.slice(36,40).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
            </div>
            <div className="row justify-content-center p-0 m-0">
                <div className="col">
                    <div className="row justify-content-end">
                        {memotest.fichasTablero.slice(40,44).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {memotest.fichasTablero.slice(44,48).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
            </div>
            <div className="row justify-content-center p-0 m-0">
                <div className="col">
                    <div className="row justify-content-end">
                        {memotest.fichasTablero.slice(48,52).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {memotest.fichasTablero.slice(52,56).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
            </div>
            <div className="row justify-content-center p-0 m-0">
                <div className="col">
                    <div className="row justify-content-end">
                        {memotest.fichasTablero.slice(56,60).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {memotest.fichasTablero.slice(60,64).map( ficha => FichaVista(ficha))}
                    </div>
                </div>
            </div>
        </>
    )

}

export default Tablero8x8;