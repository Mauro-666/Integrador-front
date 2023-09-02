import React from "react";
import '../../src/styles/components/pages/HomePage.css';

const HomePage = (props)=>{
    return(
        <main>
        {/* <!-- PRESENTACION --> */}
        <div className="presentacion">
            
            <div className="presentacion-subtitulo">Nuestro catálogo te identifica</div>
            
        </div>
        {/* <!-- RECIENTES --> */}
        <div className="Recientes">
            <h2 className="subtitulo">Remeras <a href="http://">ver mas</a></h2>
            <div className="productos">
                <div className="card-group">
                    {/* <!-- CARD 1 --> */}
                    <div className="card">
                        <img src="img/calavera.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Remera Hombre Calavera Indian</h5>
                            <h6 className="card-text">Eikeel Originales!</h6>
                            <p className="card-precio">$7.900</p>
                        </div>
                    </div>
                    {/* <!-- CARD 2 --> */}
                    <div className="card">
                        <img src="img/jack.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Remera Hombre Jack Daniels</h5>
                            <h6 className="card-text">Eikeel Originales!</h6>
                            <p className="card-precio">$8.000</p>
                        </div>
                    </div>
                    {/* <!-- CARD 3 --> */}
                    <div className="card">
                        <img src="img/control.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Remera Play Control Joystick</h5>
                            <h6 className="card-text">Eikeel Originales!</h6>
                            <p className="card-precio">$7.600</p>
                        </div>
                    </div>
                    {/* <!-- CARD 4 --> */}
                    <div className="card">
                        <img src="img/corona.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Remera Hombre Corona Van</h5>
                            <h6 className="card-text">Eikeel Originales!</h6>
                            <p className="card-precio">$7.250</p>
                        </div>
                    </div>
                    {/* <!-- CARD 5 --> */}
                    <div className="card">
                        <img src="img/ramones.jpg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Remera Hombre Ramones</h5>
                            <h6 className="card-text">Eikeel Originales!</h6>
                            <p className="card-precio">$7.250</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        {/* <!-- TECNOLOGIA --> */}
        <div className="prod">
            <div className="titulo-seccion">
                <h2 className="subtitulo">Buzos <a href="http://">ver todo</a></h2>
            </div>
            <div class="card-group">
                {/* <!-- CARD 1 --> */}
                <div className="card">
                    <img src="img/buzo1.jpg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Buzo Hombre</h5>
                        <h6 className="card-text">Tela friza algodon peinada 100% - Calidad Premium</h6>
                        <p className="card-precio">$11.921</p>
                    </div>
                </div>
                {/* <!-- CARD 2 --> */}
                <div className="card">
                    <img src="img/buzo2.jpg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Buzo Canguro Hombre</h5>
                        <h6 className="card-text">Slim Fit Hoodie Premium</h6>
                        <p className="card-precio">7.300</p>
                    </div>
                </div>
                {/* <!-- CARD 3 --> */}
                <div className="card">
                    <img src="img/buzo3.jpg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Buzo Canguro Monster</h5>
                        <h6 className="card-text">Varios Diseños - Unisex</h6>
                        <p className="card-precio">$7.990</p>
                    </div>
                </div>
                {/* <!-- CARD 4 --> */}
                <div class="card">
                    <img src="img/buzo4.jpg" className="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Buzo Canguro</h5>
                        <h6 class="card-text">Fase Lunar Aesthetic - Unisex</h6>
                        <p class="card-precio">$7.950</p>
                    </div>
                </div>
                {/* <!-- CARD 5 --> */}
                <div className="card">
                    <img src="img/buzo5.jpg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Buzo Polar Trekking Hombre</h5>
                        <h6 className="card-text">Ansilta Primo 3 Micro</h6>
                        <p className="card-precio">$45.539</p>
                    </div>
                </div>
            </div>        
        </div>
        {/* <!-- CARROUSEL --> */}
        <section id="testimonios" className="testimonios seccion-clara">
            <div id="testimonios-carrusel" class="carousel  slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/carrusel4.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="img/carrusel5.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="img/carrusel6.jpg" className="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonios-carrusel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </section>
        {/* <!-- INDUMENTARIA -->     */}
        <div className="prod">
            <div className="titulo-seccion">
                <h2 className="subtitulo">Indumentaria <a href="http://">ver todo</a></h2>
            </div>
            <div class="card-group">
                {/* <!-- CARD 1 --> */}
                <div className="card">
                    <img src="img/indumentaria1.jpg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Gorro De Lana Everlast</h5>
                        <h6 className="card-text">Original Invierno Tejido</h6>
                        <p className="card-precio">$3.999</p>
                    </div>
                </div>
                {/* <!-- CARD 2 --> */}
                <div className="card">
                    <img src="img/indumentaria2.jpg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Gorro Beanie Lana</h5>
                        <h6 className="card-text">Calidad Premium - Unisex</h6>
                        <p className="card-precio">$4.920</p>
                    </div>
                </div>
                {/* <!-- CARD 3 --> */}
                <div className="card">
                    <img src="img/indumentaria3.jpg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Cuello Capucha Polar Termico</h5>
                        <h6 className="card-text">Para Moto Invierno </h6>
                        <p className="card-precio">$1.999</p>
                    </div>
                </div>
                {/* <!-- CARD 4 --> */}
                <div class="card">
                    <img src="img/indumentaria4.jpg" className="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Medias Termicas Sox</h5>
                        <h6 class="card-text">Trekking Tecnologia Inflex</h6>
                        <p class="card-precio">$3.630</p>
                    </div>
                </div>
                {/* <!-- CARD 5 --> */}
                <div className="card">
                    <img src="img/indumentaria5.jpg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Short De Baño Topper</h5>
                        <h6 className="card-text">Super Slim Poliester</h6>
                        <p className="card-precio">$7.842</p>
                    </div>
                </div>
            </div>        
        </div>
        {/* <!-- EMPRENDEDORES --> */}
        <section>
            <h2 className="subtitulo">Nuevos Ingresos <a href="/Novedades">ver mas</a></h2>
            <div className="sec-cont">
                <div className="sec1">
                    <img src="img/remerras.jpg" alt=""></img>
                </div>
                <div className="sec2">
                    <img src="img/camperas.jpg" alt=""></img>
                </div>
            </div>
        </section>
        {/* <!-- CARTEGORIAS --> */}
        <section className="card-group ">
                <div className="card">
                    <span className="material-symbols-outlined">directions_car</span>
                    <h3 className="categoria">Remeras</h3>
                </div>
                <div className="card">
                    <span className="material-symbols-outlined">
                        computer
                        </span>
                    <h3 className="categoria">Buzos</h3>
                </div>
                <div className="card">
                    <span className="material-symbols-outlined">
                        coffee_maker
                        </span>
                    <h3 className="categoria">Jeans</h3>
                </div>
                <div className="card">
                    <span className="material-symbols-outlined">
                        sports_tennis
                        </span>
                    <h3 className="categoria">Shorts</h3>
                </div>
                <div className="card">
                    <span className="material-symbols-outlined">
                        dentistry
                        </span>
                    <h3 className="categoria">Bermudas</h3>
                </div>
                <div className="card">
                    <span className="material-symbols-outlined">
                        playing_cards
                        </span>
                    <h3 className="categoria">Boxers</h3>
                </div>
                <div className="card">
                    <span className="material-symbols-outlined">
                        phone_in_talk
                        </span>
                    <h3 className="categoria">Medias</h3>
                </div>
                <div className="card">
                    <span className="material-symbols-outlined">
                        not_started
                        </span>
                    <h3 className="categoria">Camperas</h3>
                </div>
                <div className="card">
                    <span className="material-symbols-outlined">
                        checkroom
                        </span>
                    <h3 className="categoria">Camisetas</h3>
                </div>
                <div className="card">
                    <span className="material-symbols-outlined">
                        chair
                        </span>
                    <h3 className="categoria">Gorras</h3>
                </div>
                <div className="card">
                    <span className="material-symbols-outlined">
                        charger
                        </span>
                    <h3 className="categoria">Mochilas</h3>
                </div>
                <div className="card">
                    <span className="material-symbols-outlined">
                        stadia_controller
                        </span>
                    <h3 className="categoria">Cintos</h3>
                </div>
                <button type="button" class="btn"><a class="nav-link" href="/categorias">vermas</a></button>
                
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    </main>
    )
}

export default HomePage;