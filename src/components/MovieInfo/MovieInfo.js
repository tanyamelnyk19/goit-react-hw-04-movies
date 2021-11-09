export default function MovieInfo({ movie }) {
  const posterUrl = 'https://image.tmdb.org/t/p/w500';

  return (
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
  );
}
