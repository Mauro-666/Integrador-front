import { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../../src/styles/components/pages/NovedadesPage.css';

const NovedadesPage = (props)=> {
    const [loading, setLoading]= useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(()=>{
        const cargarNovedades=async ()=>{
            setLoading(true);
            const response=await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    },[]);
    return(
        <section className="holder">
            <h2>Novedades</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ):(
                    novedades.map(item=> <NovedadItem key={item.id}
                        producto={item.producto} descripcion={item.descripcion} imagen={item.imagen} precio={item.precio} body={item.body}/>)
                )
            }
        </section>
    )
}

export default NovedadesPage;