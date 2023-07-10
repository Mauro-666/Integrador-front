import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return(
        <div className="header">
            <div className="logo">
            {/* <img src="img/plantilla-vector-logotipo-carrito-compras-azul_591497-165.avif" width="100" alt="logo"></img> */}
                <h1 className="titulo">ofertweb</h1>
            </div>
            <span className='centering'>
                <span className='box'>
                    <input
                        className='search'
                        placeholder=' '
                        spellCheck='false'
                    />
                </span>
            </span>
        </div>
    )
}

export default Header;