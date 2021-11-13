import s from './MovieInfo.module.css';
import PropTypes from 'prop-types';

export default function MovieInfo({ movie }) {
  const posterUrl = 'https://image.tmdb.org/t/p/w500';
  const noPoster =
    'https://www.prokerala.com/movies/assets/img/no-poster-available.jpg';

  return (
    <div className={s.movie}>
      <img
        src={movie.poster_path ? `${posterUrl}${movie.poster_path}` : noPoster}
        className={s.poster}
        alt={movie.title ? movie.title : movie.name}
      />
      <div className={s.info}>
        <h2 className={s.title}>
          {movie.title ? movie.title : movie.name} (
          {movie.release_date ? movie.release_date : movie.first_air_date})
        </h2>

        <p className={s.text}>User Score: {movie.vote_average * 10}%</p>

        <h3>Overview</h3>
        <p className={s.text}>{movie.overview}</p>

        <h3>Genres</h3>
        <ul className={s.list}>
          {movie.genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.object,
};
