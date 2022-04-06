import { useState, useEffect } from 'react';
import { isSessionStorage } from '../utils/session-storage';
import { fetchMovie, fetchCredits } from '../utils/api-request'

export const useMovieDetail = movieId => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await fetchMovie(movieId);
        const credits = await fetchCredits(movieId);
        // Get directors only
        const directors = credits.crew.filter(
          member => member.job === 'Director'
        );

        setState({
          ...movie,
          actors: credits.cast,
          directors
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isSessionStorage(movieId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchMovies();
  }, [movieId]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
