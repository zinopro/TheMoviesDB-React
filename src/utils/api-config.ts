const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : window.alert("Please stop Node process and enter your TheMovieDB API KEY\n and then run 'npm start' again");

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
//Available backdrop sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
//Available poster sizes: w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w185';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
};
