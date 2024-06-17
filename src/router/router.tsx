import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/home';
import LoginPage from '../pages/login/login';
import Notifications from '../pages/notifications/notificiations';
import UserProfile from '../pages/user-profile/user-profile';
import UserHistory from '../pages/user-service-history/user-service-history';
import PrivateRoute from './protected-route/private-route';

export enum RoutesList {
  Landing = '/',
  Home = '/dashboard',
  Notifications = '/notifications',
  UserHistory = '/user-history',
  UserProfile = '/user-profile',
}

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute route={RoutesList.Home}>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path='/notifications'
          element={
            <PrivateRoute route={RoutesList.Notifications}>
              <Notifications />
            </PrivateRoute>
          }
        />
        <Route
          path='/user-history'
          element={
            <PrivateRoute route={RoutesList.UserHistory}>
              <UserHistory />
            </PrivateRoute>
          }
        />
        <Route
          path='/user-profile'
          element={
            <PrivateRoute route={RoutesList.UserProfile}>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
