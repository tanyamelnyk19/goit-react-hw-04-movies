import { useHistory, useLocation } from 'react-router';
import s from './NotFoundPage.module.css';

export default function NotFoundPage() {
  const history = useHistory();
  const location = useLocation();

  const handleGoBackClick = () => {
    history.push(location?.state?.from?.location ?? '/');
  };

  return (
    <>
      <button type="button" className={s.button} onClick={handleGoBackClick}>
        Go back
      </button>
      <h2>Page not found :(</h2>
    </>
  );
}
