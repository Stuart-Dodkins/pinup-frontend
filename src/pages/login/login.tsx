import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { LoginForm } from '../../components/forms/login-form';
import { Header } from '../../components/layouts/header';
import RegisterForm from '../../components/forms/register-form';

const LoginPage: React.FC = () => {
  const [register, setRegister] = useState<boolean>(true);

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
    >
      <Header pos={'absolute'} top={0} left={0} />
      <Box display={register ? 'none' : 'block'}>
        <Flex align={'center'} justify={'center'}>
          <Text fontSize={'18px'} fontWeight={'600'}>
            Login
          </Text>
        </Flex>
        <LoginForm register={() => setRegister(!register)} />
      </Box>
      <Box display={register ? 'block' : 'none'}>
        <Flex align={'center'} justify={'center'}>
          <Text fontSize={'18px'} fontWeight={'600'}>
            Register
          </Text>
        </Flex>
        <RegisterForm login={() => setRegister(!register)} />
      </Box>
    </Flex>
  );
};

export default LoginPage;
