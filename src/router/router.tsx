import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/home';
import LoginPage from '../pages/login/login';
import PrivateRoute from './protected-route/private-route';

export enum RoutesList {
  Landing = '/',
  Home = '/dashboard',
}

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/' element={<></>}>
          <Route
            path='/dashboard'
            element={
              <PrivateRoute route={RoutesList.Home}>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
