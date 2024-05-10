import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
// import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { RoutesList } from '../../router/router';
import { BaseLayout } from '../../components/layouts/base-layout';

const HomePage: React.FC = () => {
  const cookie = new Cookies();
  // const navigate = useNavigate();

  const handleLogout = () => {
    cookie.remove('TOKEN');

    const token = cookie.get('TOKEN');
    if (token) return;
    // navigate(RoutesList.Landing);
  };

  return (
    <BaseLayout>
      <Flex gap='10px'>
        You are logged In! Welcome
        <Button onClick={handleLogout}>Logout</Button>
      </Flex>
    </BaseLayout>
  );
};

export default HomePage;
