
import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return(
        <nav>
            <div className='navbar'>
                <ul className="nav1">
                    <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined }>Inicio</NavLink></li>
                    <li><NavLink to="/categorias" className={({isActive}) => isActive ? "activo" : undefined }>Categorias</NavLink></li>
                    <li><NavLink to="/acerca" className={({isActive}) => isActive ? "activo" : undefined }>Acerca de</NavLink></li>
                    <li><NavLink to="/novedades" className={({isActive}) => isActive ? "activo" : undefined }>Novedades</NavLink></li>
                    <li><NavLink to="/contacto" className={({isActive}) => isActive ? "activo" : undefined }>Contacto</NavLink></li>
                </ul>
            </div>            
        </nav>
    )
}

export default Nav;

