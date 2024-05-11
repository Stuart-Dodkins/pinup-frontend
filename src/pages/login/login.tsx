import { Box, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { LoginForm } from '../../components/forms/login-form';
import { Header } from '../../components/layouts/header';
import RegisterForm from '../../components/forms/register-form';
import AppButton from '../../components/app/app-button/app-button';
import { IoIosBusiness } from 'react-icons/io';
import { IoPersonSharp } from 'react-icons/io5';
import { RoutesList } from '../../router/router';

const LoginPage: React.FC = () => {
  const [register, setRegister] = useState<boolean>(true);
  const [isUser, setIsUser] = useState<boolean>();
  const navigate = useNavigate();

  // const navigate = useNavigate();
  // const cookies = new Cookies();

  // const handleFormSubmit = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   if (!email || !password) return;

  //   const payload = {
  //     email: email,
  //     password: password,
  //   };

  //   axios
  //     .post('http://localhost:5050/login', payload)
  //     .then((res) => {
  //       if (!res) return;
  //       cookies.set('TOKEN', res.data.token);
  //       setIsLoggedIn(true);
  //     })
  //     .catch((e) => console.log(e));
  // };

  const handleLogin = () => {
    console.log('LOGIN');
  };

  const handleRegister = () => {
    console.log('REGISTER');
  };

  return (
    <Flex
      height={'100vh'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100vw'}
      flexDirection={'column'}
      pos={'relative'}
      px={4}
    >
      <Header pos={'absolute'} top={0} left={0} />
      <Flex
        minH={'250px'}
        w={'100%'}
        p={4}
        align={'center'}
        justify={'center'}
        boxShadow={'lg'}
        flexDir={'column'}
        gap={4}
        rounded={'lg'}
        display={isUser === undefined ? 'flex' : 'none'}
      >
        <AppButton
          onClick={() => setIsUser(false)}
          leftIcon={<IoIosBusiness />}
        >
          Business
        </AppButton>
        <AppButton onClick={() => setIsUser(true)} leftIcon={<IoPersonSharp />}>
          Personal
        </AppButton>
      </Flex>
      <Box display={isUser ? 'block' : 'none'}>
        <Box display={register ? 'none' : 'block'}>
          <Flex align={'center'} justify={'center'}>
            <Text fontSize={'18px'} fontWeight={'600'}>
              Login
            </Text>
          </Flex>
          <LoginForm
            register={() => setRegister(!register)}
            onSubmit={() => {
              console.log('GO HOME')
              navigate(RoutesList.Home);
            }}
          />
        </Box>
        <Box display={register ? 'block' : 'none'}>
          <Flex align={'center'} justify={'center'}>
            <Text fontSize={'18px'} fontWeight={'600'}>
              Register
            </Text>
          </Flex>
          <RegisterForm login={() => setRegister(!register)} />
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
