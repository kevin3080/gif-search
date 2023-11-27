import { PropTypes } from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ categorys }) => {
  const { images, isLoading } = useFetchGifs(categorys);

  return (
    <>
      <h3>{categorys}</h3>
      {
        isLoading && <h2>Cargando...</h2> // es lo mismo

        // isLoading ? // Si isLoading esta en true
        // (<h1>Cargando...</h1>) // va a ejecutar esto
        // :null // caso contrario no hace nada
        // // null no se renderiza en react */
      }

      <div className="card-grid">
        {images.map(image => (
          <GifItem
            key={image.id}
            //  title={image.title}
            //  url={image.url}
            {...image} // le pasas todas las propiedades al componente
          />
        ))}
      </div>
    </>
  );
}; /* //   images.map(({ id, title}) =>(
  //     <li key={id}>{title}</li>
  //   // images.map( image =>(
  //   //   <li key={(image.id)}>{image.title}</li>
    )) */

GifGrid.propTypes = {
  categorys: PropTypes.string.isRequired,
};
