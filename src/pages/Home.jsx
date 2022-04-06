import React from 'react';
import NavBar from '../components/NavBar';
import MovieItems from '../components/MovieItems';
import Poster from '../components/Poster';
import LoadingImage from '../components/LoadingImage';
import LoadMoreBtn from '../components/LoadMoreBtn';
import { useMoviesRequest } from '../hooks/useMoviesAPI';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../utils/api-config';
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, dispatch } = useMoviesRequest();

  if (state.error) return <div>Something went wrong ...</div>;

  const renderList = () => {
    return state.results.map((movie) => {
        return (<Poster key={movie.id}
            clickable
            image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          movieId={movie.id}
        />)
      }
    )
  }

  return (
    <>
      <NavBar dispatch={dispatch} />
      <MovieItems header={state.searchTerm ? 'Search Result' : 'Popular Movies'}>
        {renderList()}
      </MovieItems>
      {state.loading && <LoadingImage />}
      {state.page < state.total_pages && !state.loading && (
        <LoadMoreBtn text='Load More' callback={() => dispatch( {type:'LOAD_MORE', payload: { isLoadingMore: true }}) }  /> )}
    </>
  );
};

export default Home;