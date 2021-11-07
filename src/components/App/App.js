import { Switch, Route } from 'react-router-dom';
import './App.css';
import AppBar from '../AppBar/AppBar';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <AppBar />
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
    </div>
  );
}

export default App;
