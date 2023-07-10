import React from "react";

const HomePage = (props)=>{
    return(
        <main>
        {/* <!-- PRESENTACION --> */}
        <div className="presentacion">
            <div className="presentacion-titulo">Algun Contenido</div>
            <div className="presentacion-subtitulo
            ">alguna descripcion</div>
            <div className="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos illo quis qui ipsa iure debitis exercitationem ex! Maiores, dolor?</p>
            </div>
        </div>
        {/* <!-- RECIENTES --> */}
        <div className="Recientes">
            <h2 className="subtitulo">Recientes <a href="http://">ver mas</a></h2>
            <div className="productos">
                <div className="card-group">
                    {/* <!-- CARD 1 --> */}
                    <div className="card">
                        <img src="img/willtoulan_340349482_1005449510421644_3243041083061269535_n.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                            <p className="card-precio">$2.999</p>
                        </div>
                    </div>
                    {/* <!-- CARD 2 --> */}
                    <div className="card">
                        <img src="img/willtoulan_340514781_6155318227863207_5018128917390936818_n.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                            <p className="card-precio">$2.999</p>
                        </div>
                    </div>
                    {/* <!-- CARD 3 --> */}
                    <div className="card">
                        <img src="img/willtoulan_340837889_1389957075162451_8025810036129066134_n.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                            <p className="card-precio">$2.999</p>
                        </div>
                    </div>
                    {/* <!-- CARD 4 --> */}
                    <div className="card">
                        <img src="img/willtoulan_340941865_942010596936582_70136528495967759_n.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                            <p className="card-precio">$2.999</p>
                        </div>
                    </div>
                    {/* <!-- CARD 5 --> */}
                    <div className="card">
                        <img src="img/willtoulan_340953337_247450264420277_5917352357942569023_n.jpeg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                            <p className="card-precio">$2.999</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        {/* <!-- TECNOLOGIA --> */}
        <div className="prod">
            <div className="titulo-seccion">
                <h2 className="subtitulo">Tecnologia <a href="http://">ver todo</a></h2>
            </div>
            <div class="card-group">
                {/* <!-- CARD 1 --> */}
                <div className="card">
                    <img src="img/willtoulan_340349482_1005449510421644_3243041083061269535_n.jpeg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                        <p className="card-precio">$2.999</p>
                    </div>
                </div>
                {/* <!-- CARD 2 --> */}
                <div className="card">
                    <img src="img/willtoulan_340514781_6155318227863207_5018128917390936818_n.jpeg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                        <p className="card-precio">$2.999</p>
                    </div>
                </div>
                {/* <!-- CARD 3 --> */}
                <div className="card">
                    <img src="img/willtoulan_340837889_1389957075162451_8025810036129066134_n.jpeg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                        <p className="card-precio">$2.999</p>
                    </div>
                </div>
                {/* <!-- CARD 4 --> */}
                <div class="card">
                    <img src="img/willtoulan_340941865_942010596936582_70136528495967759_n.jpeg" className="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                        <p class="card-precio">$2.999</p>
                    </div>
                </div>
                {/* <!-- CARD 5 --> */}
                <div className="card">
                    <img src="img/willtoulan_340953337_247450264420277_5917352357942569023_n.jpeg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                        <p className="card-precio">$2.999</p>
                    </div>
                </div>
            </div>        
        </div>
        {/* <!-- CARROUSEL --> */}
        <section id="testimonios" className="testimonios seccion-clara">
            <div id="testimonios-carrusel" class="carousel  slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/willtoulan_340349482_1005449510421644_3243041083061269535_n.jpeg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="img/willtoulan_340514781_6155318227863207_5018128917390936818_n.jpeg" className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="img/willtoulan_340941865_942010596936582_70136528495967759_n.jpeg" className="d-block w-100" alt="..."></img>
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
                    <img src="img/willtoulan_340349482_1005449510421644_3243041083061269535_n.jpeg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                        <p className="card-precio">$2.999</p>
                    </div>
                </div>
                {/* <!-- CARD 2 --> */}
                <div className="card">
                    <img src="img/willtoulan_340514781_6155318227863207_5018128917390936818_n.jpeg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                        <p className="card-precio">$2.999</p>
                    </div>
                </div>
                {/* <!-- CARD 3 --> */}
                <div className="card">
                    <img src="img/willtoulan_340837889_1389957075162451_8025810036129066134_n.jpeg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                        <p className="card-precio">$2.999</p>
                    </div>
                </div>
                {/* <!-- CARD 4 --> */}
                <div class="card">
                    <img src="img/willtoulan_340941865_942010596936582_70136528495967759_n.jpeg" className="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                        <p class="card-precio">$2.999</p>
                    </div>
                </div>
                {/* <!-- CARD 5 --> */}
                <div className="card">
                    <img src="img/willtoulan_340953337_247450264420277_5917352357942569023_n.jpeg" className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-text">This card has supporting text below as a natural lead-in to additional content.</h6>
                        <p className="card-precio">$2.999</p>
                    </div>
                </div>
            </div>        
        </div>
        {/* <!-- EMPRENDEDORES --> */}
        <section>
            <h2 className="subtitulo">Descubrí nuestra seccion emprendedores <a href="http://">ver mas</a></h2>
            <div className="sec-cont">
                <div className="sec1">
                    <img src="img/emprendedores1.jpg" alt=""></img>
                </div>
                <div className="sec2">
                    <img src="img/emprendedores2.jpg" alt=""></img>
                </div>
            </div>
        </section>
        {/* <!-- CARTEGORIAS --> */}
        <section className="cont-categorias ">
            <div className="container-categorias d-flex flex-wrap align-items-center justify-content-center">
                <div className="card-cat">
                    <span className="material-symbols-outlined">directions_car</span>
                    <h3 className="categoria">Autos, Motos y Otros</h3>
                </div>
                <div className="card-cat">
                    <span className="material-symbols-outlined">
                        computer
                        </span>
                    <h3 className="categoria">Computacion</h3>
                </div>
                <div className="card-cat">
                    <span className="material-symbols-outlined">
                        coffee_maker
                        </span>
                    <h3 className="categoria">Electrodomesticos</h3>
                </div>
                <div className="card-cat">
                    <span className="material-symbols-outlined">
                        sports_tennis
                        </span>
                    <h3 className="categoria">Deportes</h3>
                </div>
                <div className="card-cat">
                    <span className="material-symbols-outlined">
                        dentistry
                        </span>
                    <h3 className="categoria">Belleza y Cuidado Personal</h3>
                </div>
                <div className="card-cat">
                    <span className="material-symbols-outlined">
                        playing_cards
                        </span>
                    <h3 className="categoria">Juegos y Juguetes</h3>
                </div>
                <div className="card-cat">
                    <span className="material-symbols-outlined">
                        phone_in_talk
                        </span>
                    <h3 className="categoria">Celulares y Telefonos</h3>
                </div>
                <div className="card-cat">
                    <span className="material-symbols-outlined">
                        not_started
                        </span>
                    <h3 className="categoria">Electronica, Audio y Video</h3>
                </div>
                <div className="card-cat">
                    <span className="material-symbols-outlined">
                        checkroom
                        </span>
                    <h3 className="categoria">Ropa y Accesorios</h3>
                </div>
                <div className="card-cat">
                    <span className="material-symbols-outlined">
                        chair
                        </span>
                    <h3 className="categoria">Hogar, Muebles y Jardin</h3>
                </div>
                <div className="card-cat">
                    <span className="material-symbols-outlined">
                        charger
                        </span>
                    <h3 className="categoria">Accesorios para Vehiculos</h3>
                </div>
                <div className="card-cat">
                    <span className="material-symbols-outlined">
                        stadia_controller
                        </span>
                    <h3 className="categoria">Consolas y Videojuegos</h3>
                </div>
            </div>
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    </main>
    )
}

export default HomePage;