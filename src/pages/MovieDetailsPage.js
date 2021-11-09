import { useState, useEffect } from 'react';
import { NavLink, useRouteMatch, Route, useParams } from 'react-router-dom';
import { getMovieById } from '../services/moviesApi';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';
import MovieInfo from '../components/MovieInfo/MovieInfo';

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId)
      .then(res => setMovie(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {movie && <MovieInfo movie={movie} />}

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
