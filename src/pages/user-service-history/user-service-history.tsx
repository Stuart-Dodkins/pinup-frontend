import { Flex, Text } from '@chakra-ui/react';
import { BaseLayout } from '../../components/layouts/base-layout';

const UserHistory: React.FC = () => {
  return (
    <BaseLayout>
      <Flex flexDir={'column'} gap={6}>
        <Text fontWeight={'600'} fontSize={'2xl'}>
          Service History
        </Text>
      </Flex>
    </BaseLayout>
  );
};

export default UserHistory;
