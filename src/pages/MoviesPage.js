import { useState } from 'react';
import { getMoviesByQuery } from '../services/moviesApi';
import { Link } from 'react-router-dom';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

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
      <form className="SearchForm" onSubmit={handleFormSubmit}>
        <input
          className="SearchForm-input"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          onChange={handleInputChange}
        />

        <button type="submit" className="SearchForm-button">
          Search
        </button>
      </form>

      {results && (
        <ul>
          {results.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
