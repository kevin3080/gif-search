export const getGifs = async(categorys) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=opHAvUMy7391TFRqBs5WQiWzmnP2zdWo&q=${categorys}&limit=10`;
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