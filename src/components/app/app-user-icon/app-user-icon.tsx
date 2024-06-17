import { Flex, Text, FlexProps } from '@chakra-ui/react';
import { Business } from '../../../models/business';
import { User } from '../../../models/user';
import { AppColors } from '../../../theme';

export type UserNavIconProps = {
  user: Business | User | null;
  bgColor?: string;
  fontSize?: string;
  onClick: (link: any) => void;
} & FlexProps;

export const AppUserIcon: React.FC<UserNavIconProps> = ({
  user,
  bgColor,
  fontSize = '16px',
  onClick,
  ...props
}) => {
  return (
    <Flex
      borderRadius={'100%'}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
        transition: '0.2s',
        cursor: 'pointer',
      }}
      bgColor={bgColor}
      justify={'center'}
      align={'center'}
      color={'white'}
      onClick={onClick}
      border={`3px solid ${AppColors.primary}`}
      w={'35px'}
      h={'35px'}
      {...props}
    >
      <Text
        fontWeight={'600'}
        alignSelf={'center'}
        justifySelf={'center'}
        fontSize={fontSize}
      >{`${user?.contactInfo?.email[0].toUpperCase()}`}</Text>
    </Flex>
  );
};
