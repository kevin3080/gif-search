import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {
   test('debe de retornar un arreglo de gifs', async () => {
      const gifs = await getGifs('One Punch');
      //console.log(gifs);
      // .toBeGreaterThan(0) evaluamos que tengamos un arreglo de mas de 0 elementos
      expect(gifs.length).toBeGreaterThan(0);

      // aqui esperamos que gifs reciba como objeto esto:
      expect(gifs[0]).toEqual({
         id: expect.any(String),
         title: expect.any(String),
         url: expect.any(String),
      });
   });
});
