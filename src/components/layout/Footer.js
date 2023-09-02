import '../../styles/components/layout/Footer.css';

const Footer = (props)=> {
    return(
        <div className='footer'>
            <div class="seccion-oscura d-flex flex-column align-items-center justify-content-center">
            <img src="img/logoFooter.jpg" width="100" alt="logo"></img>
            <img src='../img/arlequinLogo.jpg'></img>
        {/* <!-- Redes Sociales --> */}
        <div class="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
            <a href="http://twiter.com/" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-twitter"></i>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-github"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
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