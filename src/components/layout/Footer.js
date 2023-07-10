import '../../styles/components/layout/Footer.css';

const Footer = (props)=> {
    return(
        <div className='footer'>
            <div class="seccion-oscura d-flex flex-column align-items-center justify-content-center">
            <img src="img/plantilla-vector-logotipo-carrito-compras-azul_591497-165.avif" width="100" alt="logo"></img>
            <h1 class="titulo">Algun titulo</h1>
        {/* <!-- Redes Sociales --> */}
        <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
            <a href="https:" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-twitter"></i>
            </a>
            <a href="https:" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-github"></i>
            </a>
            <a href="https:" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-instagram"></i>
            </a>
            <a href="https:" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-linkedin"></i>
            </a>
            <a href="mailto:" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-envelope-at-fill"></i>
            </a>
        </div>
        <div class="derechos-de-autor">Derechos Reservados (2023) &#169;</div>
    </div>
        </div>
    )
}

export default Footer;