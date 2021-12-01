import { useState } from "react";
import back from './Fichas/back.png';


const Ficha = (ficha) => {

    const [estaOculta, setEstaOculta] = useState(true);

    const handleSubmit = event => {
        event.preventDefault();
        setEstaOculta(false);
    }

    return (
        <div className="col-2 text-center border p-1 m-0">
            <button className="btn" type="button" onClick={handleSubmit}>
            {estaOculta ? (
                <img src={back} className="img-fluid p-0 m-0" width="160" alt="..."></img>
            ) : (
                <img src={ficha.imagen} className="img-fluid p-0 m-0" width="160" alt="..."></img>
            )}
            </button>
        </div>
    )
}

export default Ficha;