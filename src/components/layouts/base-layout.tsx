import { Flex, IconButton } from '@chakra-ui/react';
import { AppColors } from '../../theme';
import { ReactNode } from 'react';
import { RoutesList } from '../../router/router';
import { useNavigate } from 'react-router-dom';
import { FaRegBell } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { Header } from './header';
import { FaHistory } from "react-icons/fa";

export type BaseLayoutProps = {
  children?: ReactNode | ReactNode[];
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Flex
      minH={'100vh'}
      minW={'100vw'}
      pos={'relative'}
      flexDir={'column'}
      bgClip={AppColors.appTextColor}
    >
      <Header
        goBack={() => handleBack()}
        onMenuOpen={() => navigate(RoutesList.UserProfile)}
      />
      <Flex
        overflow={'auto'}
        w={'100%'}
        h={'auto'}
        p={4}
        pb={'60px'}
        flexDir={'column'}
      >
        {children}
      </Flex>
      <Flex
        zIndex={100}
        bottom={0}
        h={'60px'}
        w={'100%'}
        pos={'absolute'}
        align={'center'}
        justifyContent={'space-evenly'}
        flexDir={'row'}
        gap={4}
        boxShadow={'0px 0px 8px 8px rgba(0, 0, 0, 0.05)'}
      >
        <IconButton
          icon={<FaSearch />}
          aria-label={'ts'}
          bgColor={'transparent'}
          color={AppColors.appTextColor}
          borderRadius={'lg'}
          border={`1px solid ${AppColors.secondary}`}
          _hover={{
            boxShadow: 'lg',
          }}
          onClick={() => {
            navigate(RoutesList.Home);
          }}
        />
        <IconButton
          icon={<FaRegBell />}
          aria-label={'ts'}
          bgColor={'transparent'}
          color={AppColors.appTextColor}
          borderRadius={'lg'}
          border={`1px solid ${AppColors.secondary}`}
          _hover={{
            boxShadow: 'lg',
          }}
          onClick={() => {
            navigate(RoutesList.Notifications);
          }}
        />

        <IconButton
          icon={<FaHistory />}
          aria-label={'ts'}
          bgColor={'transparent'}
          color={AppColors.appTextColor}
          borderRadius={'lg'}
          border={`1px solid ${AppColors.secondary}`}
          _hover={{
            boxShadow: 'lg',
          }}
          onClick={() => navigate(RoutesList.UserHistory)}
        />
      </Flex>
    </Flex>
  );
};
