"use strict";

const $showsList = $("#shows-list");
const $episodesArea = $("#episodes-area");
const $searchForm = $("#search-form");
const $searchQuery = $("#search-query");
const noImageUrl = "https://tinyurl.com/tv-missing";



/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(query) {
  let showQuery = $searchQuery.val();
  const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${showQuery}`);
  // console.log($searchQuery.val());
  console.log(res);
  let shows = res.data;
  for (let show of shows) {
    // console.log(show.show.name);
    console.log({
      id: show.show.id,
      name: show.show.name,
      summary: show.show.summary,
      image: show.show.image ? show.show.image.medium : noImageUrl
    })
  }
}


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img src="${show.image}" alt="${show.name}" class="w-25 mr-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>  
       </div>
      `);

    $showsList.append($show);
  }
}



/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getShowEpisodes(id) {
  const res = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);

  return res.data.map(e => ({
    id: e.id,
    name: e.name,
    season: e.season,
    number: e.number
  }));
}

/** Write a clear docstring for this function... */

// function populateEpisodes(episodes) { }
