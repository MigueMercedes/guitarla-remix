const Curso = ({ curso }) => {
	const { contenido, imagen, titulo } = curso.attributes
	console.log(imagen.data.attributes)
	return (
		<section 
      className="curso" 
      style={{
        backgroundImage: `
          linear-gradient( to right, rgb(0 0 0 / .65), 
          rgb(0 0 0 / .7) ), 
          url(${imagen.data.attributes.url}`,
        
        }}
    >
			<div className="contenedor curso-grid">
				<div className="contenido">
					<h2 className="heading">{titulo}</h2>
					<p className="texto">{contenido}</p>
				</div>
			</div>
		</section>
	)
}

export default Curso
