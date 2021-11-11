import { useState, useEffect } from 'react';
import { NavLink, useRouteMatch, Route, useParams } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import { getMovieById } from '../../services/moviesApi';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import MovieInfo from '../../components/MovieInfo/MovieInfo';

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    getMovieById(movieId)
      .then(res => setMovie(res))
      .catch(err => console.log(err));
  }, [movieId]);

  const handleGoBackClick = () => {
    history.push(location?.state?.from?.location ?? '/');
  };

  return (
    <>
      <button type="button" onClick={handleGoBackClick}>
        Go back
      </button>

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
