import { Flex, Text, Icon, FlexProps } from '@chakra-ui/react';
import { FaMapPin } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';
import { AppColors } from '../../theme';
import { GiHamburgerMenu } from 'react-icons/gi';

export interface HeaderProps extends FlexProps {
  goBack?: () => void;
  onMenuOpen?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onMenuOpen,
  goBack,
  ...props
}) => {
  return (
    <Flex
      gap={30}
      w={'full'}
      h={'60px'}
      justify={'center'}
      align={'center'}
      pos={'relative'}
      boxShadow={'0px 0px 4px 4px rgba(0, 0, 0, 0.05)'}
      {...props}
    >
      {goBack && (
        <Icon
          pos={'absolute'}
          top={'15px'}
          left={4}
          as={IoArrowBack}
          onClick={goBack}
          aria-label='back-nav'
          color={AppColors.appTextColor}
          w={'30px'}
          h={'30px'}
          _hover={{
            cursor: 'pointer',
          }}
        />
      )}
      <Text fontWeight={'600'} fontSize={'18px'}>
        PinUp
      </Text>
      <Icon as={FaMapPin} />
      {onMenuOpen && (
        <Icon
          as={GiHamburgerMenu}
          pos={'absolute'}
          top={'15px'}
          right={4}
          onClick={onMenuOpen}
          aria-label='back-nav'
          color={AppColors.appTextColor}
          w={'30px'}
          h={'30px'}
          _hover={{
            cursor: 'pointer',
          }}
        />
      )}
    </Flex>
  );
};
