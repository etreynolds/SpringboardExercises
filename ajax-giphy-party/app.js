const gifArea = document.querySelector("#gif-area");
const searchInput = document.querySelector("#search");


$("form").on("submit", async function (e) {
    e.preventDefault();

    let searchTerm = searchInput.value;
    console.log(searchTerm);

    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            api_key: 'm6H9OetG0XXRu3eerY9DNwAClVqXvEsP',
            q: searchTerm
        }
    });
    console.log(res);
    console.log(res.data.data.length);
});

function addGif() {

}

