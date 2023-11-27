import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {
  test('debería agregar una nueva categdoría si no existe en la lista', () => {
    // Renderizo el componente
    render(<GifExpertApp />);
    screen.debug();
    // Encuentro el input
    const input = screen.getByPlaceholderText('buscar gifs');

    // Simula una categoría que no existe y agrego la categoría
    input.value = 'Saitama';
    fireEvent.change(input);

    // Verifica que la nueva categoría esté en la lista
    expect(screen.getByText('Saitama')).toBeInTheDocument();
  });
});
