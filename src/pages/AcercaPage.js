import React from 'react';
import '../styles/components/pages/AcercaPage.css';

const AcercaPage = (props)=> {
    return(
        <main role='main' id='root-app'>
            <div className='categorias-root'>
                <section className='categorias-container'>
                    <h1 className='categorias-container_titulo'>De que se trata?</h1>
                    <div className='categorias_container_main'>
                        <div className='andes-card categorias andes-card--flat andes-card--padding-16' id='react-aria-1'>
                            
                            <div className='categorias_container' itemScope itemType='http://schema.og/ItemList'>
                                <h2 className='categorias_titulo' itemProp='name'>
                                    
                                    <p>Hola, te comento un poco mi proyecto...
                                        <br></br>
                                        <br></br>
                                        Soy estudiante de programación Web Full Stack de la UTN..
                                        <br></br>
                                        <br></br>
                                        Tuve la idea de presentar como proyecto final una pagina multiusuario para venta/compra de productos.
                                        Mi intención es que cualquier persona tenga a al alcance de la mano un lugar donde pueda encontrar y/o publicar productos. Esto nace al ver publicaciones en redes sociales como Facebook, donde los usuarios publican en sus estados algún producto que quiere vender, y asi logra que lo contacten para poder coordinar la transacción. Siguiendo con este ejemplo, vi la posibilidad de crear una página que reúna estas características.
                                        En principio los usuarios deben registrarse en simples pasos, aclarando los medios por los cuales quiere ser contactado (WhatsApp, mail, etc.). 
                                        <br></br>
                                        <br></br>
                                        ¡Espero que te sirva y puedas encontrar lo que buscas!

                                        <br></br>
                                        <br></br>
                                        Debido a los limites de tiempo me vi forzado a cambiar la tematica para la entrega, paso a ser una tienda de ropa.. esto es solo para entrega del proyecto, la idea es seguir trabajndo la pagina luego de la curzada, por esto es que se vera codigo comentado.
                                        no llegue a hacer el formulario pero si tengo configurado los links de las cadenas sociales al igual que el envio de mail.
                                        

                                    </p>
                                </h2>
                                
                            </div>
                            
                            
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default AcercaPage;