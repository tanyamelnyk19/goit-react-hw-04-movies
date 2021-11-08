import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from '../services/moviesApi';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then(res => setMovies(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
