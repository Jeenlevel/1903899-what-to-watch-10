import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyScreen from '../../pages/empty-screen/empty-screen';
import MyList from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import MovieReviewsScreen from '../../pages/movie-reviews-screen/movie-reviews-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import PrivateRoute from '../private-route/private-route';
import LoginScreen from '../../pages/login-screen/login-screen';

type AppScreenProps = {
  title: string;
  genre: string;
  releaseDate: number;
}

function App({ title, genre, releaseDate }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}
          element={<MainScreen title={title} genre={genre} releaseDate={releaseDate} />}
        />
        <Route path={AppRoute.SignIn}
          element={<LoginScreen />}
        />
        <Route path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film}
          element={<MovieScreen title={title} genre={genre} releaseDate={releaseDate} />}
        />
        <Route path={AppRoute.AddReview}
          element={<MovieReviewsScreen title={title} genre={genre} releaseDate={releaseDate} />}
        />
        <Route path={AppRoute.Player}
          element={<PlayerScreen />}
        />
        <Route path="*"
          element={<EmptyScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
