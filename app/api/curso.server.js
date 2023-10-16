export async function getCurso() {
  const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
  console.log(respuesta)
  return await respuesta.json();
}