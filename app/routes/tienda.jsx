export async function loader() {
  const respuesta = await fetch('http://127.0.0.1:1337/api/guitarras?populate=imagen');
  const resultado = await respuesta.json();
  console.log(resultado);
  return {}
}

function Tienda() {
  return (
    <div>Tienda</div>
  )
}

export default Tienda