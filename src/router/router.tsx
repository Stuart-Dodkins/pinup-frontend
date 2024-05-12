import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/home';
import LoginPage from '../pages/login/login';
// import PrivateRoute from './protected-route/private-route';
import Notifications from '../pages/notifications/notificiations';
import UserProfile from '../pages/user-profile/user-profile';

export enum RoutesList {
  Landing = '/',
  Home = '/dashboard',
  Notifications = '/notifications',
  UserProfile = '/user-profile'
}

//TO WRAP PAGES IN PROTECTED ROUTE

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<HomePage />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/user-profile' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};
