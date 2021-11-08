import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviewsById } from '../../services/moviesApi';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviewsById(movieId)
      .then(res => setReviews(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews ? (
          reviews.map(({ author, content }) => {
            return (
              <li>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </>
  );
}
