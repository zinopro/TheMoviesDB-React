import React from 'react';
import NavBar from '../components/NavBar';
import MovieItems from '../components/MovieItems';
import Poster from '../components/Poster';
import ImageLoader from '../components/ImageLoader';
import LoadMoreBtn from '../components/LoadMoreBtn';
import { useMoviesRequest } from '../hooks/useMoviesAPI';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../utils/api-config';
import { Result as Results } from '../Model/Movies';
import NoPoster from '../images/no_image.jpg';


const Home = ():JSX.Element => {
  const { state, dispatch } = useMoviesRequest();

  if (state.error) return <div>Something went wrong ...</div>;

  const renderList = ():JSX.Element[] => {
    return state.results.map((movie: Results) => {
        return (<Poster key={movie.id}
            clickable
            image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoPoster
          }
          movieId={movie.id}
        />)
      }
    )
  }

  return (
    <>
      <NavBar dispatch={dispatch} />
      <MovieItems searchTerm={state.searchTerm ? 'Search Result' : 'Popular Movies'}>
        {renderList()}
      </MovieItems>
      {state.loading && <ImageLoader />}
      {state.page < state.total_pages && !state.loading && (
        <LoadMoreBtn value='Load More' callback={() => dispatch( {type:'LOAD_MORE', payload: { isLoadingMore: true }}) }  /> )}
    </>
  );
};

export default Home;