import back from '../Fichas/back.png';

const Encabezado = () => {

    return (
        <nav className="navbar navbar-success bg-success">
            <div className="container-fluid">
                <div className="navbar-brand text-light fw-bold fs-3">
                    <img src={back} alt="" width="35" height="35" className="d-inline-block align-text-top me-3"/>
                    Memotest
                </div>
            </div>
        </nav>
    )
}

export default Encabezado;