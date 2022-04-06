import React from 'react';

import MovieTitle from '../components/MovieTitle';
import ImageLoader from '../components/ImageLoader';
import MovieInfo from '../components/MovieInfo';

import { useParams } from 'react-router-dom';
// Hook
import { useMovieDetail } from '../hooks/useMovieDetailAPI';


const MoviDetail = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieDetail(movieId);

  if (loading) return <ImageLoader />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <MovieTitle movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </>
  );
};

export default MoviDetail;