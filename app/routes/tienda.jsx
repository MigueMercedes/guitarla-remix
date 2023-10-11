import { useLoaderData } from "@remix-run/react";
import Guitarra from "@/components/guitarra";
import { getGuitarras } from "@/api/guitarras.server";
import styles from '@/styles/guitarras.css';

export function meta() {
  return [
    {
      title: 'GuitarLA - Tienda de Guitarras',
      description: 'GuitarLA - Nuestra colección de guitarras'
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
export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

function Tienda() {

  const guitarras = useLoaderData();

  return (
    <main className="contenedor">
      <h2 className="heading">Nuestra Colección</h2>
      
      {guitarras?.length > 0 ? (
        <div className="guitarras-grid">
          {guitarras.map( guitarra => (
            <Guitarra
              key={guitarra?.attributes.url}
              guitarra={guitarra?.attributes}
            />
          ))}
        </div>
      ): 'No hay guitarras actualmente' }

    </main>
  )
}

export default Tienda