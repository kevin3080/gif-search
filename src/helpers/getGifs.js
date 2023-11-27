export const getGifs = async(categorys) => {

    // Modificar el link con tu propia api key
    // https://api.giphy.com/v1/gifs/search?api_key=${YOUR_APY_KEY}&q=${categorys}&limit=10

    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categorys}&limit=10`;
    const resp = await fetch(url); // peticion http
    const { data = [] } = await resp.json();

    //console.log(data);
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
}));
    //console.log(gifs);
    return gifs;
}