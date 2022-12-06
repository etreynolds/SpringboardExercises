const gifArea = document.getElementById("gif-area");
const searchInput = document.getElementById("search");
const removeBtn = document.getElementById("remove");
const submit = document.getElementById("submit");


submit.addEventListener("click", async function (e) {
    e.preventDefault();
    let searchTerm = searchInput.value;
    // console.log(searchTerm);

    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            api_key: 'm6H9OetG0XXRu3eerY9DNwAClVqXvEsP',
            q: searchTerm
        }
    });
    console.log(res);
    // console.log(res.data.data.length);
    addGif(res);
    searchInput.value = "";
});

function addGif(res) {
    let numOfResults = res.data.data.length;
    if (numOfResults > 0) {
        let randomNumber = Math.floor(Math.random() * numOfResults);
        let gifUrl = res.data.data[randomNumber].images.fixed_width.url;
        const newCol = document.createElement("div");
        // newCol.classList.add("col-md-4");
        newCol.classList.add("col-md-6");
        newCol.classList.add("mb-4");
        gifArea.appendChild(newCol);
        const newGif = document.createElement("img");
        newGif.setAttribute("src", gifUrl);
        newGif.classList.add("w-75");
        newCol.appendChild(newGif);
        console.log(gifUrl);

    }
};

removeBtn.addEventListener("click", function () {
    gifArea.innerHTML = "";
});
