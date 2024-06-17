import { Box, Flex, Text, useToast } from '@chakra-ui/react';
// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Cookies from 'universal-cookie';
import { LoginForm, LoginFormData } from '../../components/forms/login-form';
import { Header } from '../../components/layouts/header';
import RegisterForm, {
  RegisterFormData,
} from '../../components/forms/register-form';
import AppButton from '../../components/app/app-button/app-button';
import { IoIosBusiness } from 'react-icons/io';
import { IoPersonSharp } from 'react-icons/io5';
import { RoutesList } from '../../router/router';
import { useDispatch } from 'react-redux';
// import { User } from '../../models/user';
import { setIconColor } from '../../store/slices/user-icon-slice';
import { useUserAuthMutation } from '../../store/api/authApi';
import { logout, setUserAuth } from '../../store/slices/auth.slice';
import { UserAuth } from '../../models/auth';

const LoginPage: React.FC = () => {
  const [register, setRegister] = useState<boolean>(true);
  const [isUser, setIsUser] = useState<boolean>(true);
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userAuth, { data, isLoading, error, isSuccess, isError }] =
    useUserAuthMutation();

  const handleLogin = async (formData: LoginFormData) => {
    if (isUser) {
      try {
        await dispatch(logout());
        const userLogin = await userAuth({
          email: formData.email,
          password: formData.password,
        }).unwrap();
        dispatch(setUserAuth(userLogin));
        navigate(RoutesList.Home);
      } catch (error) {
        toast({
          title: 'Login Error',
          description: "We've run into an error trying to log you in",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    } else {
      console.log('BUSNIESS LOGIN');
    }
  };

  const handleRegister = (formData: RegisterFormData) => {
    if (isUser) {
      // dispatch(
      //   setUser({
      //     userId: '',
      //     firstName: '',
      //     lastName: '',
      //     contactInfo: {
      //       email: formData.email,
      //       phone: '',
      //       address: '',
      //     },
      //   })
      // );
    } else {
      console.log('BUSINESS REGISTER');
    }
    // dispatch(setFirstLogin(true));
  };

  useEffect(() => {
    const values = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += values[Math.floor(Math.random() * 16)];
    }
    dispatch(setIconColor(color));
  }, []);

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
      <Header
        pos={'absolute'}
        top={0}
        left={0}
        goBack={() => setIsUser(false)}
      />
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
        display={isUser === false ? 'flex' : 'none'}
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
      <Box display={isUser !== undefined ? 'block' : 'none'}>
        <Box display={register ? 'none' : 'block'}>
          <Flex align={'center'} justify={'center'}>
            <Text fontSize={'18px'} fontWeight={'600'}>
              Login
            </Text>
          </Flex>
          <LoginForm
            register={() => setRegister(!register)}
            onSubmit={async (formData) => {
              await handleLogin(formData);
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
          <RegisterForm
            login={() => setRegister(!register)}
            onSubmit={(formData) => {
              handleRegister(formData);
              navigate(RoutesList.Home);
            }}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
