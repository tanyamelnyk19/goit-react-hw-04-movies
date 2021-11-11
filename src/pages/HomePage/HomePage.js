import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from '../../services/moviesApi';
import { useLocation } from 'react-router';
import s from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovies()
      .then(res => setMovies(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1 className={s.heading}>Trending today</h1>
      <ul className={s.list}>
        {movies &&
          movies.map(movie => (
            <li key={movie.id} className={s.movie}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: { location, label: 'back to home' },
                  },
                }}
              >
                {movie.title ? movie.title : movie.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
