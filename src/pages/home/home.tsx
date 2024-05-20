import { Text, Flex } from '@chakra-ui/react';
import React from 'react';
// import { useNavigate } from "react-router-dom";
// import Cookies from 'universal-cookie';
// import { RoutesList } from '../../router/router';
import { BaseLayout } from '../../components/layouts/base-layout';
import ServiceFinderForm from '../../components/forms/find-a-service-form';

const HomePage: React.FC = () => {
  // const cookie = new Cookies();
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   cookie.remove('TOKEN');

  //   const token = cookie.get('TOKEN');
  //   if (token) return;
  // };

  return (
    <BaseLayout>
      <Flex
        flexDir={'column'}
        w={'100%'}
        h={'100%'}
        justify={'center'}
        align={'center'}
        gap={6}
      >
        <Text fontWeight={'600'} fontSize={'xl'}>
          Find a service
        </Text>
        <ServiceFinderForm
          onSubmit={(formData) => {
            console.log('FORMDATA', formData);
          }}
        />
      </Flex>
    </BaseLayout>
  );
};

export default HomePage;
