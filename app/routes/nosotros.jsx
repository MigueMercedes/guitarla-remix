import ImgNosotros from 'public/img/nosotros.jpg';
import StylesNosotros from '@/styles/nosotros.css'

export function meta() {
  return [
    {title: 'GuitarLA - Nosotros'},
    {description: 'Venta de guitarras, blog de música'}
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: StylesNosotros
    },
    {
      rel: 'preload',
      href: ImgNosotros,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>

      <div className='contenido'>
        <img src={ImgNosotros} alt="Imagen Sobre Nosotros" />

        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor dolorem est doloribus, commodi 
            repudiandae architecto maiores, autem itaque exercitationem doloremque animi, rem quidem. 
            Commodi rerum perspiciatis voluptatem placeat, ipsum odio.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus architecto consectetur ab
            eius quidem dicta ducimus numquam ipsam reprehenderit corrupti quod quo eaque tempora quam 
            temporibus earum, nihil non quasi.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros