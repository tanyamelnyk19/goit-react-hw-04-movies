import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCastById } from '../../services/moviesApi';
import s from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const castUrl = 'https://image.tmdb.org/t/p/w92';
  const noPhoto =
    'https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-20.jpg';

  useEffect(() => {
    getMovieCastById(movieId)
      .then(res => setCast(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      <ul className={s.cast}>
        {cast &&
          cast.cast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id} className={s.actor}>
                <img
                  src={profile_path ? `${castUrl}${profile_path}` : noPhoto}
                  className={s.photo}
                  width="92"
                  alt={name}
                ></img>
                <h4 className={s.name}>{name}</h4>
                <p className={s.text}>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
