import { UsarMem } from '../ContextoMemotest.jsx';
import { useNavigate } from 'react-router-dom';

const CuadroDePartidaGanada = () => {
    const memotest = UsarMem();
    const navigate = useNavigate();

    const onClick = () => {
        memotest.setPuntaje(0);
        memotest.setPartidaGanada(false);
        memotest.setFichasTablero([]);
        navigate('/');
    }

    return (
        <div className="alert alert-success me-md-3" role="alert">
            <div className="row justify-content-center pb-2">
                ¡Ganaste!
            </div>
            <div className="row">
                <button type="button" class="btn btn-success" onClick={onClick}>Nueva partida</button>
            </div>
        </div>
    )
}

export default CuadroDePartidaGanada;