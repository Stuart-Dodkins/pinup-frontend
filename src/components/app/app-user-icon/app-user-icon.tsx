import { Flex, Text } from '@chakra-ui/react';
import { Business } from '../../../models/business';

export type UserNavIconProps = {
  user: Business | null;
  bgColor?: string;
  onClick: (link: any) => void;
};

export const AppUserIcon: React.FC<UserNavIconProps> = ({
  user,
  bgColor,
  onClick,
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
      border={`3px solid white`}
      w={'35px'}
      h={'35px'}
    >
      <Text fontWeight={'600'}>{`${user?.name[0]}`}</Text>
    </Flex>
  );
};
