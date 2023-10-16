import { getPostById } from "@/api/posts.server";
import { formatearFecha } from "@/utils/helpers";
import { useLoaderData } from "@remix-run/react";
import styles from "@/styles/blog.css";

export function meta({data}) {
  
  if( !data ) {
    return [
      {
        title: 'Entrada No Encontrada',
        description: 'Guitarras, venta de guitarras, Entrada no encontrada'
      }
    ]
  }
  
  const title = `GuitarLA - ${data?.data[0]?.attributes?.titulo}`;
  const description = `Guitarras, venta de guitarras, guitarra ${data?.data[0]?.attributes?.titulo}`;
  console.log(data);
  
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
  const { postId } = params;
  const post = await getPostById(postId)

  if(post.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Entrada no encontrada'
    });
  }

  return post; 
}

function posts() {
  
  const post = useLoaderData(); 
  const { titulo, contenido, imagen, createdAt} = post?.data[0]?.attributes;

  return (
    <article className="contenedor post mt-3">
      <img src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`} className="imagen" />
      <div className="contenido">
        <h3>{ titulo }</h3>
        <p className="fecha">{ formatearFecha(createdAt) }</p>
        <p className="texto">{ contenido }</p>
      </div>
    </article>
  )
}

export default posts