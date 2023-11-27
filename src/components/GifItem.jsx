import propTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  //console.log(title, url);

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};
/*  Test tarea: 

  1. Añadir proptypes
    a. title obligatorio
    b. url obligatiorio

  2. Evaluar el snapshot
*/
