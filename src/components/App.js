import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ProveedorMem, UsarMem } from './ContextoMemotest.jsx';
import Layout from './plantillas/Layout.jsx';
import Tablero from './plantillas/Tablero.jsx';
import NuevaPartida from './plantillas/NuevaPartida.jsx';

const App = () => {

  return (
    <ProveedorMem>
      <BrowserRouter>
        <Routes>
          <Route element={ <Layout/> } >
            <Route path="/" element={ <NuevaPartida/> } />
            <Route path="/tablero" element={ <Tablero/> } />
            <Route path="*" element={ <NuevaPartida/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProveedorMem>
  )
}

const RequiereTamanioTablero = ({ children }) => {
  const memotest = UsarMem();
  if (memotest.tamanioTablero == '') {
    return <NuevaPartida/>
  }
  return children;
}


export default App;
