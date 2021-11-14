import { useState, useEffect } from 'react';
import { getMovies } from '../../services/moviesApi';
import MoviesList from '../../components/MoviesList/MoviesList';
import s from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then(res => setMovies(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1 className={s.heading}>Trending today</h1>

      {movies && <MoviesList movies={movies} />}
    </>
  );
}
