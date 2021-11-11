import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCastById } from '../../services/moviesApi';

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
      <ul>
        {cast &&
          cast.cast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={profile_path ? `${castUrl}${profile_path}` : noPhoto}
                  width="92"
                  alt={name}
                ></img>
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
