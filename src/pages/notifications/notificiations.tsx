import { Flex, Text } from '@chakra-ui/react';
import { BaseLayout } from '../../components/layouts/base-layout';

const Notifications: React.FC = () => {
  return (
    <BaseLayout>
      <Flex w={'100%'} flexDir={'column'} gap={8}>
        <Text fontWeight={'600'} fontSize={'2xl'}>
          Notifications
        </Text>
        <Text color={'#333333'} fontSize={'18px'}>No new notifications</Text>
      </Flex>
    </BaseLayout>
  );
};

export default Notifications;
