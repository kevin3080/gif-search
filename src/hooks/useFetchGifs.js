import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = categorys => {
   const [images, setImages] = useState([]);
   // loading
   const [isLoading, setIsLoading] = useState([true]);

   const getImages = async () => {
      const newImages = await getGifs(categorys);
      setImages(newImages);
      setIsLoading(false);
   };

   // el useEffect es un huok para disparar efectos secundarios
   useEffect(() => {
      getImages();
   }, []);

   return {
      //images: images,
      images, // como la variable es el mismo nombre se puede llamar directamente
      //isLoading: isLoading
      isLoading,
   };
};
