import { useState, useEffect } from 'react';
import { getMoviesByQuery } from '../../services/moviesApi';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('query');

    if (!searchQuery) {
      return;
    }

    if (searchQuery) {
      getMoviesByQuery(searchQuery)
        .then(res => setResults(res))
        .catch(err => console.log(err));

      setQuery('');
    }
  }, [location.search]);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    history.push({
      ...location,
      search: `query=${query}`,
    });
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
