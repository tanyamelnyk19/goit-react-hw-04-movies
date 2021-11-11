import { useHistory, useLocation } from 'react-router';

export default function NotFoundPage() {
  const history = useHistory();
  const location = useLocation();

  const handleGoBackClick = () => {
    history.push(location?.state?.from?.location ?? '/');
  };

  return (
    <>
      <button type="button" onClick={handleGoBackClick}>
        Go back
      </button>
      <h2>Page not found :(</h2>
    </>
  );
}
