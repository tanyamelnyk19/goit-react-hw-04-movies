import { useState, useEffect } from 'react';
import { NavLink, useRouteMatch, Route, useParams } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import { getMovieById } from '../../services/moviesApi';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import s from './MovieDetailsPage.module.css';

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
      <button type="button" className={s.button} onClick={handleGoBackClick}>
        ← Go back
      </button>

      {movie ? (
        <>
          <MovieInfo movie={movie} />

          <p>Additional information</p>
          <ul>
            <li>
              <NavLink
                to={`${url}/cast`}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/reviews`}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </>
      ) : (
        <p>No information about film!</p>
      )}

      <Route path="/movies/:movieId/cast">
        <Cast />
      </Route>

      <Route path="/movies/:movieId/reviews">
        <Reviews />
      </Route>
    </>
  );
}
