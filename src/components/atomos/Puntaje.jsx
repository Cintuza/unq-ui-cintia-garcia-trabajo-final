import { UsarMem } from '../ContextoMemotest.jsx';

const Puntaje = () => {
    const memotest = UsarMem();

    return (
        <div className="row border rounded border-success border-3 justify-content-center me-md-3">
            <p className="pt-2 text-success">
                Puntaje: {memotest.puntaje}
            </p>
        </div>
    )
}

export default Puntaje;