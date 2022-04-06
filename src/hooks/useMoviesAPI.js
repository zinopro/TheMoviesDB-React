import { useReducer, useEffect } from 'react';
import { fetchMovies } from '../utils/api-request';
import { isSessionStorage } from '../utils/session-storage';

const initialState = {
  page: 0,
  total_pages: 0,
  total_results: 0,
  results: [],
};

const MovieReducer = (state, action) => {
  switch(action.type) {
    case 'SEARCH_TERM':
      return ({
        ...state, searchTerm: action.payload.searchTerm
      });
    case 'FETCH_SUCCESS':
      return ({
        ...state,
        page: action.payload.data.page,
        total_pages: action.payload.data.total_pages,
        total_results: action.payload.data.total_results,
        results: action.payload.data.page > 1 ? [...state.results, ...action.payload.data.results] : [...action.payload.data.results]
      });
    case 'FETCH_ERROR':
      return ({ 
        page: 0, loading: false, error: true, results: [] 
      });
      case 'LOADING_MOVIES':
        return ({
          ...state, loading: action.payload.loading
        });
      case 'LOAD_MORE':
        return ({
          ...state, isLoadingMore: action.payload.isLoadingMore
        });
     
    default: 
      return state;
  }
}

export const useMoviesRequest = () => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);
  
  const fetchMoviesDb = async (searchTerm = '', page) => {
    try {
      const data = await fetchMovies(searchTerm, page);
      dispatch({type: 'FETCH_SUCCESS', payload: { data, page } });
    } catch (error) {
      dispatch({type:'FETCH_ERROR', payload: { error: true }});
    }
  };

//initial data from Session
useEffect(() => {
    if (!state.searchTerm) {
       const data = isSessionStorage('LandingPage');
  
    if (data) {
      console.log('Grabbing data from sessionStorage');
      dispatch({type:'FETCH_SUCCESS', payload: { data} });
      return;
    }
  }
  console.log('Grabbing data from API');
    fetchMoviesDb(state.searchTerm, 1);
}, [state.searchTerm]);
  
//Loading More Movies
useEffect(() => {
    if (!state.isLoadingMore) return;
    fetchMoviesDb(state.searchTerm, state.page + 1);
    dispatch({type:'LOAD_MORE', payload: { isLoadingMore: false }});
}, [state.isLoadingMore, state.searchTerm, state.page]);
  

//Set session payload
useEffect(() => {
  if (!state.searchTerm) sessionStorage.setItem('LandingPage', JSON.stringify(state));
}, [state.searchTerm, state]);

return ({ state, dispatch });
};

// setSearchTerm: React.Dispatch<React.SetStateAction<string>>