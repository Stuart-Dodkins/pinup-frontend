import { Flex, Text, Icon, FlexProps } from '@chakra-ui/react';
import { FaMapPin } from 'react-icons/fa';

export interface HeaderProps extends FlexProps {}

export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <Flex
      w={'100%'}
      h={'60px'}
      justify={'center'}
      align={'center'}
      boxShadow={'0px 0px 4px 4px rgba(0, 0, 0, 0.05)'}
      {...props}
    >
      <Text fontWeight={'600'} fontSize={'18px'}>
        PinUp
      </Text>
      <Icon as={FaMapPin} />
    </Flex>
  );
};
