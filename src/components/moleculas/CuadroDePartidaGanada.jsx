import BotonNuevaPartida from '../atomos/BotonNuevaPartida.jsx';

const CuadroDePartidaGanada = () => {

    return (
        <div className="alert alert-success mt-3" role="alert">
            <div className="row justify-content-center pb-2">
                ¡Ganaste!
            </div>
            <div className="row">
                <BotonNuevaPartida/>
            </div>
        </div>
    )
}

export default CuadroDePartidaGanada;