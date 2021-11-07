import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { getMovieById } from '../services/moviesApi';
import { useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const posterUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieById(movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <>
      {/* <img src={`${posterUrl}${movie.poster_path}`} />
      <h2>{movie.title ? movie.title : movie.name} (год)</h2> */}
      <p>User Score: </p>
      <h3>Overview</h3>
      <p>описание</p>
      <h3>Genres</h3>
      <ul></ul>
    </>
  );
}
