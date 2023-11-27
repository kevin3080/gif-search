import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';
/*  Test tarea: 

  1. Añadir proptypes
    a. title obligatorio
    b. url obligatiorio

  2. Evaluar el snapshot
*/

describe('Pruebas en <GifItem />', () => {
   const title = 'Saitama';
   const url = 'https://cualquierurl.jpg/';

   test('debe de hacer match con el snapshot', () => {
      const { container } = render(<GifItem title={title} url={url} />);
      expect(container).toMatchSnapshot();
   });
   test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
      render(<GifItem title={title} url={url} />);
      // //screen.debug();
      // expect(screen.getAllByRole('img').src).toBe(url);
      // //console.log(screen.getByRole('img').src);

      const { src, alt } = screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(alt);
   });

   test('debe de mostrar el titulo en el componente', () => {
      render(<GifItem title={title} url={url} />);
      expect(screen.getByText(title)).toBeTruthy(); // .toBeTruthy() es decir que exista
   });
});
