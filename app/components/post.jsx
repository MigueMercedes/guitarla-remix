import { formatearFecha } from "@/utils/helpers";
import { Link } from "@remix-run/react"

const Post = ({post}) => {

  const { contenido, titulo, imagen, url, createdAt } = post.attributes;

  return (
    <article className="post">
      <img src={imagen.data.attributes.formats.small.url} alt={`Imagen blog ${titulo}`} className="imagen" />
      <div className="contenido">
        <h3>{ titulo }</h3>
        <p className="fecha">{ formatearFecha(createdAt) }</p>
        <p className="resumen">{ contenido }</p>
        <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
      </div>
    </article>
  )
}

export default Post