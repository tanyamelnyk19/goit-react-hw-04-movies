import { useState, useEffect } from 'react';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import { getMovieById } from '../services/moviesApi';
import { useParams } from 'react-router-dom';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const posterUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieById(movieId)
      .then(res => setMovie(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img
            src={`${posterUrl}${movie.poster_path}`}
            width="200"
            alt={movie.title ? movie.title : movie.name}
          />
          <h2>
            {movie.title ? movie.title : movie.name} (
            {movie.release_date ? movie.release_date : movie.first_air_date})
          </h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </>
      )}

      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>

      <Route path="/movies/:movieId/cast">
        <Cast />
      </Route>

      <Route path="/movies/:movieId/reviews">
        <Reviews />
      </Route>
    </>
  );
}
