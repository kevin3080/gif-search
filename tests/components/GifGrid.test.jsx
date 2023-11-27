import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
jest.mock('../../src/hooks/useFetchGifs');
// con esto estamos diciendo que haga un mock completo de: ../../src/hooks/useFetchGifs

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch';

  test('debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid categorys={category} />);
    //screen.debug();
    expect(screen.getByText(category));
    expect(screen.getByText('Cargando...'));
  });

  test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid categorys={category} />);
    //creen.debug();

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
