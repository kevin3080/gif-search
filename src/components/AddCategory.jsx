import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
    //console.log(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    //console.log(inputValue)
    if (inputValue.trim().length <= 1)
      return; /* str.trim() El método trim( ) elimina los espacios en blanco en 
        ambos extremos del string. Los espacios en blanco en este contexto, son todos los caracteres 
        sin contenido (espacio, tabulación, etc.) y todos los caracteres de nuevas lineas (LF,CR,etc.).*/
    // llamoAsetCategories( cat => [...cat, inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue(''); // con esto borramos lo que escribimos en el buscador una vez le das enter
  };

  return (
    <form onSubmit={event => onSubmit(event)} aria-label="form">
      <input
        type="text"
        placeholder="buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  // tiene que proporcionar esta funcion
  onNewCategory: PropTypes.func.isRequired,
};
