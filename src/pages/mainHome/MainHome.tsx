import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import AppButton from '../../components/app/app-button/app-button';

const MainHomePage: React.FC = () => {
  const [loggingIn, setLoggingIn] = useState<boolean>(true);

  return (
    <Flex gap={'10px'}>
      <AppButton onClick={() => {}}>Register</AppButton>
      <AppButton onClick={() => {}}>Login</AppButton>
    </Flex>
  );
};

export default MainHomePage;
