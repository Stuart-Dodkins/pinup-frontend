import { Text, Flex, Icon, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { RoutesList } from '../../router/router';
import { BaseLayout } from '../../components/layouts/base-layout';
import { IoSearch } from 'react-icons/io5';
import AppButton from '../../components/app/app-button/app-button';

const HomePage: React.FC = () => {
  const cookie = new Cookies();
  const [searchParam, setSearchParam] = useState<string>('');
  // const navigate = useNavigate();

  const handleLogout = () => {
    cookie.remove('TOKEN');

    const token = cookie.get('TOKEN');
    if (token) return;
    // navigate(RoutesList.Landing);
  };

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
          Where are you?
        </Text>
        <Stack pos={'relative'} w={'100%'}>
          <Input
            rounded={'md'}
            pos={'relative'}
            h={10}
            placeholder='Search Location'
            onChange={(e) => setSearchParam(e.target.value)}
          />
          <Icon
            as={IoSearch}
            pos={'absolute'}
            right={4}
            top={2}
            w={'25px'}
            h={'25px'}
          />
          <AppButton onClick={() => console.log('Search param', searchParam)}>
            Search
          </AppButton>
        </Stack>
      </Flex>
    </BaseLayout>
  );
};

export default HomePage;
