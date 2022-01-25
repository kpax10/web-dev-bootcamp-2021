const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearImages();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=`, config)
    makeImages(res.data);
    form.elements.query.value = '';

})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

const clearImages = () => {
    const images = document.querySelectorAll('img');
    for (let image of images) {
        image.remove();
    }
}