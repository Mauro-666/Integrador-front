import React from 'react';

const NovedadItem = (props)=>{
    const {producto, descripcion, imagen, precio, body} = props;

    return(
        <main role='main' id='root-app'>
            <div className='categorias-root'>
                <section className='categorias-container'>
                    
                    <div className='categorias_container_main'>
                        <div className='andes-card categorias andes-card--flat andes-card--padding-16' id='react-aria-1'>
                            <div className='categorias_container' itemScope itemType='http://schema.og/ItemList'>
                                <div className='container'>
                                <img src={imagen}/>
                                <div className='novedades'>
                                    <div className='prod'>
                                        <h1>{producto}</h1>
                                        <h2>{descripcion}</h2>
                                        <h3>${precio}</h3>
                                        <div dangerouslySetInnerHTML={{__html:body}}/>
                                        <hr/>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default NovedadItem;