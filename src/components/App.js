import React from 'react'
import { useState } from "react";
import Fichas from "./Fichas/Fichas";
import { ProveedorMem } from './ContextoMemotest.jsx';
import Tablero4x4 from './Tablero4x4.jsx'
import Ficha from './Ficha';

const App = () => {

  return (
    <ProveedorMem>
      <Tablero4x4/>
    </ProveedorMem>
  )
}


export default App;
