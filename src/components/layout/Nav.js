
import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return(
        <nav>
            <div className='navbar'>
                <ul className="nav1">
                    <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined }>Inicio</NavLink></li>
                    <li><NavLink to="/historia" className={({isActive}) => isActive ? "activo" : undefined }>Historia</NavLink></li>
                    <li><NavLink to="/supermercado" className={({isActive}) => isActive ? "activo" : undefined }>Supermercado</NavLink></li>
                    <li><NavLink to="/moda" className={({isActive}) => isActive ? "activo" : undefined }>Moda</NavLink></li>
                    <li><NavLink to="/vender" className={({isActive}) => isActive ? "activo" : undefined }>Vender</NavLink></li>
                    <li><NavLink to="/ayuda" className={({isActive}) => isActive ? "activo" : undefined }>Ayuda</NavLink></li>
                    
                        {/* // <a href="/">Inicio</a></li> */}
                    {/* <li><a href="categoria.html">Categoria</a></li>
                    <li><a href="ofertas.html">Ofertas</a></li>
                    <li><a href="historia.html">Historia</a></li>
                    <li><a href="supermercado.html">Supermercado</a></li>
                    <li><a href="moda.html">Moda</a></li>
                    <li><a href="vender.html">Vender</a></li>
                    <li><a href="ayuda.html">Ayuda</a></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Nav;