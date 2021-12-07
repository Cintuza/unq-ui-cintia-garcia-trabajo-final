const CuadroDePartidaGanada = () => {

    const onClick = () => {
        memotest.setFichasTablero4x4(Fichas());
        memotest.setPuntaje(0);
        memotest.setPartidaGanada(false);
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