import { UsarMem } from '../ContextoMemotest.jsx';
import { useNavigate } from 'react-router-dom';

const BotonNuevaPartida = () => {
    const memotest = UsarMem();
    const navigate = useNavigate();

    const onClick = () => {
        memotest.setPuntaje(0);
        memotest.setPartidaGanada(false);
        memotest.setFichasTablero([]);
        navigate('/');
    }

    return (
        <button type="button" class="btn btn-light text-success" onClick={onClick}>Nueva partida</button>
    )

}

export default BotonNuevaPartida;