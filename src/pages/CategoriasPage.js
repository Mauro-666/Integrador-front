import React from 'react';
import '../styles/components/pages/CategoriasPage.css'
const SupermercadoPage = (props)=> {
    return(
        <main role='main' id='root-app'>
            <div className='categorias-root'>
                <section className='categorias-container'>
                    <h1 className='categorias-container_titulo'>Categorias para Comprar y Vender</h1>
                    <div className='categorias_container_main'>
                        <div className='andes-card categorias andes-card--flat andes-card--padding-16' id='react-aria-1'>
                            {/* Accesorios para Vehículos */}
                            {/* <div className='categorias_container' itemScope itemType='http://schema.og/ItemList'>
                                <h2 className='categorias_titulo' itemProp='name'>
                                    <a href='' className='categorias_titulo' itemProp='url'>Accesorios para Vehículos</a>
                                </h2>
                                <ul className='categorias_lista' aria-label='categoria' itemScope itemType='http://schema.org/ItemList'>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Acc. para Motos y Cuatriciclos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Accesorios Náuticos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Accesorios de Auto y Camioneta</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Accesorios para Camiones</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Audio para Vehículos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>GNC</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Herramientas para Vehículos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Limpieza de Vehículos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Llantas y Accesorios</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Lubricantes y Fluidos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Motos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Navegadores GPS</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Neumáticos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Performance</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Repuestos Autos y Camionetas</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Repuestos Motos y Cuatricíclos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Repuestos Neumáticos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Repuestos de Línea Pesada</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Seguridad Vehicular</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Servicio Programado</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Tags para el Pago de Peajes</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Tuning</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Otros</h3>
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                            {/* Agro */}
                            <div className='categorias_container' itemScope itemType='http://schema.og/ItemList'>
                                <h2 className='categorias_titulo' itemProp='name'>
                                    <a href='' className='categorias_titulo' itemProp='url'>Indumentaria</a>
                                </h2>
                                <ul className='categorias_lista' aria-label='categoria' itemScope itemType='http://schema.org/ItemList'>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Remeras</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Buzos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Jeans</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Shorts</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Bermudas</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Boxers</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Medias</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Camperas</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Camisetas</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Sweters</h3>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Accesorios */}
                            <div className='categorias_container' itemScope itemType='http://schema.og/ItemList'>
                                <h2 className='categorias_titulo' itemProp='name'>
                                    <a href='' className='categorias_titulo' itemProp='url'>Accesorios</a>
                                </h2>
                                <ul className='categorias_lista' aria-label='categoria' itemScope itemType='http://schema.org/ItemList'>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Riñoneras</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Gorras</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Bufandas</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Cintos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Billeteras</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Mochilas</h3>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                            {/* Alimentos y Bebidas */}
                            {/* <div className='categorias_container' itemScope itemType='http://schema.og/ItemList'>
                                <h2 className='categorias_titulo' itemProp='name'>
                                    <a href='' className='categorias_titulo' itemProp='url'>Alimentos y Bebidas</a>
                                </h2>
                                <ul className='categorias_lista' aria-label='categoria' itemScope itemType='http://schema.org/ItemList'>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Almacen</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Bebidas</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Comida Preparada</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Congelados</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Frescos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Kafir</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Otros</h3>
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                            {/* Animales y Mascotas */}
                            {/* <div className='categorias_container' itemScope itemType='http://schema.og/ItemList'>
                                <h2 className='categorias_titulo' itemProp='name'>
                                    <a href='' className='categorias_titulo' itemProp='url'>Animales y Mascotas</a>
                                </h2>
                                <ul className='categorias_lista' aria-label='categoria' itemScope itemType='http://schema.org/ItemList'>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Aves</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Caballos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Conejos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Gatos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Insectos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Jaulas para Mascotas</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Peces</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Perros</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Reptiles y Anfíbios</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Roedores</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Otros</h3>
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                            {/* Antiguedades y Colecciones */}
                            {/* <div className='categorias_container' itemScope itemType='http://schema.og/ItemList'>
                                <h2 className='categorias_titulo' itemProp='name'>
                                    <a href='' className='categorias_titulo' itemProp='url'>Antiguedades y Colecciones</a>
                                </h2>
                                <ul className='categorias_lista' aria-label='categoria' itemScope itemType='http://schema.org/ItemList'>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Antiguedades</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Banderas</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Coleccionables de Deportes</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Esculturas</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Filatelia</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Militaria y Afines</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Monedas y Billetes</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Posters</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Otros</h3>
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                            {/* Arte, Librería y Mecería */}
                            {/* <div className='categorias_container' itemScope itemType='http://schema.og/ItemList'>
                                <h2 className='categorias_titulo' itemProp='name'>
                                    <a href='' className='categorias_titulo' itemProp='url'>Arte, Librería y Mecería</a>
                                </h2>
                                <ul className='categorias_lista' aria-label='categoria' itemScope itemType='http://schema.org/ItemList'>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Arte y Manualidades</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Espejos y Venecitas</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Librería</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Mercería</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Otros</h3>
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                            {/* Bebés */}
                            {/* <div className='categorias_container' itemScope itemType='http://schema.og/ItemList'>
                                <h2 className='categorias_titulo' itemProp='name'>
                                    <a href='' className='categorias_titulo' itemProp='url'>Bebés</a>
                                </h2>
                                <ul className='categorias_lista' aria-label='categoria' itemScope itemType='http://schema.org/ItemList'>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Andadores y Vehículos de Bebés</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Artículos Bebés para Baño</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Artículos de Maternidad</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Chupetes y Mordillos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Comida para Bebés</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Corralitos</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Cuarto del Bebé</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Higiene y Cuidado del Bebé</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Juegos y Juguetes para Bebés</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Lactancia y Alimentación</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Paseo del Bebé</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Ropa y Calzado para Bebés</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Salud del Bebé</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Seguridad para Bebés</h3>
                                        </a>
                                    </li>
                                    <li className='categorias_item' itemProp='name'>
                                        <a href="" className='categorias_subtitulo' itemProp='url'>
                                            <h3 className='categorias_subtitulo-titulo'>Otros</h3>
                                        </a>
                                    </li>
                                </ul>
                            </div> */}
                            {/* Belleza y Cuidado Personal */}
                            {/* Cámaras y Accesorios */}
                            {/* Celu */}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default SupermercadoPage;