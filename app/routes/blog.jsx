import { getPosts } from "@/api/posts.server";
import ListadoPosts from "@/components/listado-posts";
import styles from "@/styles/blog.css";
import { useLoaderData } from "@remix-run/react";

export function meta() {
  return [
    {
      title: 'GuitarLA - Nuestro Blog',
      description: 'GuitarLA, Blog de música y venta de guitarras'
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
  const posts = await getPosts();
  return posts.data;
}

function Blog() {

  const posts = useLoaderData();

  return (
    <main className="contenedor">
      <ListadoPosts 
        posts={posts}
      />
    </main>
  )
}

export default Blog