import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import s from './MoviesList.module.css';

export default function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li key={movie.id} className={s.movie}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: { location },
              },
            }}
          >
            {movie.title ? movie.title : movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
