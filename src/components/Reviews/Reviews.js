import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviewsById } from '../../services/moviesApi';
import s from './Reviews.module.css';

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
      {reviews && reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p className={s.author}>Author: {author}</p>
                <p className={s.text}>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
}
