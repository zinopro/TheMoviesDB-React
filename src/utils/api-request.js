import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    API_KEY,
  } from './api-config';
  
  const defaultConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

export const fetchMovies = async (searchTerm, page) => {
      const endpoint = searchTerm
        ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
        : `${POPULAR_BASE_URL}&page=${page}`;
      return await (await fetch(endpoint)).json();
}

export const fetchMovie = async (movieId) => {
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      return await (await fetch(endpoint)).json();
}

export const fetchCredits = async (movieIdr) => {
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      return await (await fetch(creditsEndpoint)).json();
}
  