import React, { useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutesList } from '../router';
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/slices/auth.slice';

interface PrivateRouteProps {
  route: string;
  children: ReactNode | ReactNode[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  route,
  children,
}: any) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const token = useSelector(selectToken)

  const routeGuard = () => {
    if (route) {
      switch (route) {
        case RoutesList.Home:
          return navigate(RoutesList.Home);
        default:
          break;
      }
    }
  };

  const checkLogin = () => {
    if (token) {
      setLoggedIn(true);
    } else {
      return navigate(RoutesList.Landing);
    }
    routeGuard();
  };

  useEffect(() => {
    checkLogin();
  }, [loggedIn]);

  return <React.Fragment>{loggedIn ? children : <></>}</React.Fragment>;
};

export default PrivateRoute;
