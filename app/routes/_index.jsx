import { getGuitarras } from "@/api/guitarras.server";
import { getPosts } from "@/api/posts.server";
import ListadoGuitarras from "@/components/listado-guitarras";
import { useLoaderData } from "react-router";
import stylesGuitarras from "@/styles/guitarras.css"
import stylesPosts from "@/styles/blog.css"
import stylesCurso from "@/styles/curso.css"
import ListadoPosts from "@/components/listado-posts";
import { getCurso } from "@/api/curso.server";
import Curso from "@/components/curso";

export function meta() {
  return [
    {
      title: 'GuitarLA - Tu pagina de guitarras favorita',
      description: 'GuitarLA - Nuestra colección de guitarras'
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader() {

  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data, 
    posts: posts.data,
    curso: curso.data
  }
}

function Index() {

  const { guitarras, posts, curso } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>

      <hr />

      <Curso 
        curso={curso}
      />

      <hr />

      <section className="contenedor">
        <ListadoPosts 
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index