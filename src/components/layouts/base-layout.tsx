import { Flex, Icon, IconButton, Text } from '@chakra-ui/react';
import { AppColors } from '../../theme';
import { ReactNode } from 'react';
import { RoutesList } from '../../router/router';
import { useNavigate } from 'react-router-dom';
import { AppUserIcon } from '../app/app-user-icon/app-user-icon';
import { FaRegUser } from 'react-icons/fa';
import { FaRegBell } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { FaMapPin } from 'react-icons/fa';

export type BaseLayoutProps = {
  children?: ReactNode | ReactNode[];
};

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    // const navigate = useNavigate();
  return (
    <Flex minH={'100vh'} minW={'100vw'} pos={'relative'} flexDir={'column'}>
      <Flex
        w={'100%'}
        h={'60px'}
        justify={'center'}
        align={'center'}
        boxShadow={'0px 0px 4px 4px rgba(0, 0, 0, 0.05)'}
      >
        <Text fontWeight={'600'} fontSize={'18px'}>
          PinUp
        </Text>
        <Icon as={FaMapPin} />
      </Flex>
      <Flex
        overflow={'auto'}
        w={'100%'}
        h={'100%'}
        pt={4}
        pb={{ base: '60px', lg: 0 }}
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
        gap={{ base: 4, lg: 16 }}
        boxShadow={'0px 0px 8px 8px rgba(0, 0, 0, 0.05)'}
      >
        <IconButton
          icon={<FaRegUser />}
          aria-label={'ts'}
          bgColor={'transparent'}
          color={AppColors.appTextColor}
          borderRadius={'lg'}
          border={`1px solid ${AppColors.secondary}`}
          _hover={{
            boxShadow: 'lg',
          }}
        />

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
        />
      </Flex>
    </Flex>
  );
};
