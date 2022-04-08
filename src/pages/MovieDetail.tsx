import React from 'react';

import MovieTitle from '../components/MovieTitle';
import ImageLoader from '../components/ImageLoader';
import MovieInfo from '../components/MovieInfo';
import { useMovieDetail } from '../hooks/useMovieDetailAPI';
import { iMovieInfo } from '../Model/Movies';
import { useParams } from 'react-router-dom';

const MoviDetail: React.FC<iMovieInfo> = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieDetail(String(movieId));

  if (loading) return <ImageLoader />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <MovieTitle movieTitle={movie?.original_title ? movie.original_title : ""} />
      <MovieInfo {...movie} />
    </>
  );
};

export default MoviDetail;