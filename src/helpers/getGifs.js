export const getGifs = async (category) => {
    const limit = 10;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=C0vsI6XdSE6sjuFcYQxrEgKKlG7ycodH&q=${category}&limit=${limit}`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
};  