

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?query=';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODE4YmVlYjk5NWU4YTdmNWNjMWIxMmM0ZDk3MTYxZiIsIm5iZiI6MTc0NjU0OTk2My45MTEsInN1YiI6IjY4MWEzY2NiNzRiODIxZjc2NTA4YWM2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oXn6Xh3CfhyRLGBTF_yVj1nK0xfiHhodGfOW6W3O4r4';


const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const suggestions = document.getElementById('suggestions');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('current');

/* ---------- Pagination & App State ---------- */
let currentPage = 1;
let totalPages = 1;
let mode = 'popular';        // 'popular' | 'search'
let currentQuery = '';

/* ---------- Build API URL ---------- */
function buildUrl() {
  if (mode === 'popular') {
    return `${API_URL}?page=${currentPage}`;
  } else {
    return `${SEARCH_API}${encodeURIComponent(currentQuery)}&page=${currentPage}`;
  }
}

/* ---------- Fetch Movies ---------- */
async function getMovies() {
  const res = await fetch(buildUrl(), {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    }
  });

  const data = await res.json();

  totalPages = data.total_pages;
  current.textContent = currentPage;

  prev.disabled = currentPage <= 1;
  next.disabled = currentPage >= totalPages;

  showMovies(data.results);
}

/* ---------- Display Movies ---------- */
function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
      <img src="${poster_path ? IMG_PATH + poster_path : ''}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;

    main.appendChild(movieEl);
  });
}

/* ---------- Rating Color ---------- */
function getClassByRate(vote) {
  if (vote >= 8) return 'green';
  if (vote >= 5) return 'orange';
  return 'red';
}

/* ---------- Pagination Buttons ---------- */
prev.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    getMovies();
  }
});

next.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    getMovies();
  }
});

/* ---------- Live Search Suggestions ---------- */
search.addEventListener('input', async () => {
  const query = search.value.trim();
  
  /* If input is empty → load popular movies */
  if (query === '') {
    suggestions.innerHTML = '';
    mode = 'popular';
    currentPage = 1;
    getMovies();
    return;
  }

  if (query.length < 2) {
    suggestions.innerHTML = '';
    return;
  }

  const res = await fetch(SEARCH_API + encodeURIComponent(query), {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    }
  });

  const data = await res.json();
  showSuggestions(data.results.slice(0, 5));
});

/* ---------- Suggestions UI ---------- */
function showSuggestions(movies) {
  suggestions.innerHTML = '';

  movies.forEach(movie => {
    const div = document.createElement('div');
    div.classList.add('suggestion-item');
    div.textContent = movie.title;

    div.onclick = () => {
      search.value = movie.title;
      suggestions.innerHTML = '';
      mode = 'search';
      currentQuery = movie.title;
      currentPage = 1;
      getMovies();
    };

    suggestions.appendChild(div);
  });
}

/* ---------- Search Submit ---------- */
form.addEventListener('submit', e => {
  e.preventDefault();

  const query = search.value.trim();
  if (!query) return;

  suggestions.innerHTML = '';
  mode = 'search';
  currentQuery = query;
  currentPage = 1;
  getMovies();
});

/* ---------- Initial Load ---------- */
mode = 'popular';
currentPage = 1;
getMovies();
