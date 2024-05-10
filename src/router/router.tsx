import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/home';
import MainHomePage from '../pages/mainHome/MainHome';
import LoginPage from '../pages/login/login';
import RegisterPage from '../pages/register/register';
import PrivateRoute from './protected-route/private-route';

export enum RoutesList {
  Landing = '/',
  Home = '/dashboard',
  Register = '/register',
  Login = '/login',
}

// we should have both the login and register on one page

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<MainHomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
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
