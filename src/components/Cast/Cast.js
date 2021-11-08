import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCastById } from '../../services/moviesApi';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const castUrl = 'https://image.tmdb.org/t/p/w92';

  useEffect(() => {
    getMovieCastById(movieId)
      .then(res => setCast(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      <ul>
        {cast &&
          cast.cast.map(({ profile_path, name, character }) => {
            return (
              <li>
                <img src={`${castUrl}${profile_path}`} alt={name}></img>
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
