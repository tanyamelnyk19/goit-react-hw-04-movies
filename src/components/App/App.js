import { Switch, Route } from 'react-router-dom';
import './App.css';
import AppBar from '../AppBar/AppBar';
import { lazy, Suspense } from 'react';
import MyLoader from '../MyLoader/MyLoader';

// import HomePage from '../../pages/HomePage';
// import MoviesPage from '../../pages/MoviesPage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage';
// import NotFoundPage from '../../pages/NotFoundPage';

const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage' /* webpackChunkName: "MoviesPage" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */),
);

function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<MyLoader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
