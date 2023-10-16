import { getGuitarras } from "@/api/guitarras.server";
import ListadoGuitarras from "@/components/listado-guitarras";
import styles from '@/styles/guitarras.css';
import { useLoaderData } from "@remix-run/react";

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
      <ListadoGuitarras 
        guitarras={guitarras}
      />

    </main>
  )
}

export default Tienda