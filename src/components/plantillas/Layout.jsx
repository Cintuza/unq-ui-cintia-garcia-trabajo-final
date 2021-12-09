import { Outlet } from 'react-router-dom';
import Encabezado from '../moleculas/Encabezado'

const Layout = () => {

    return (
        <>
        <Encabezado/>
        <Outlet/>
        </>
    )
}

export default Layout;