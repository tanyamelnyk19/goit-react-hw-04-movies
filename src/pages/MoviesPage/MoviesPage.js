import { useState } from 'react';
import { getMoviesByQuery } from '../../services/moviesApi';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const location = useLocation();

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    resetForm();

    getMoviesByQuery(query)
      .then(res => setResults(res))
      .catch(err => console.log(err));
  };

  const resetForm = () => {
    setQuery('');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <input
          className={s.input}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          onChange={handleInputChange}
        />

        <button type="submit" className={s.button}>
          Search
        </button>
      </form>

      {results && (
        <ul>
          {results.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: {
                    from: { location, label: 'back to movies' },
                  },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
