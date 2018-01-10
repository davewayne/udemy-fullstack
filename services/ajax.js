const  fetchAlbums = async() => {
    const res = fetch('https://murmuring-tundra-82853.herokuapp.com/api/current_user')
    const json = await res.json();
console.log(json);
}

fetchAlbums();