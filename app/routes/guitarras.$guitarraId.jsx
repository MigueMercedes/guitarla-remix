import { useLoaderData } from '@remix-run/react';
import { getGuitarraById } from '@/api/guitarras.server'
import styles from '@/styles/guitarras.css'

export function meta({data}) {
  
  if( !data ) {
    return [
      {
        title: 'Guitarra No Encontrada',
        description: 'Guitarras, venta de guitarras, guitarra no encontrada'
      }
    ]
  }
  
  const title = `GuitarLA - ${data.attributes.nombre}`;
  const description = `Guitarras, venta de guitarras, guitarra ${data.attributes.nombre}`;
  
  return [
    {
      title,
      description
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader({ params }) {
  
  const { guitarraId } = params;
  const guitarra = await getGuitarraById( guitarraId );
  
  if( guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra No Encontrada'
    })
  }
  
  return guitarra.data[0];
}

function Guitarra() {
  
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.attributes;

  return (
    <main className="contenedor guitarra">

      <img 
        className='imagen' 
        src={imagen.data.attributes.url} 
        alt={`Imagen de ${nombre}`} 
      />

      <div className="contenido">
        <h3>{ nombre }</h3>
        <p className="texto">{ descripcion }</p>
        <p className="precio">${ precio }</p>
      </div>
      
    </main>
  )
}

export default Guitarra