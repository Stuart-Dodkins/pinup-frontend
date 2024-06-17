import { Flex, Text } from '@chakra-ui/react';
import AppButton from '../../components/app/app-button/app-button';
import { BaseLayout } from '../../components/layouts/base-layout';
import AppUserCard from '../../components/app/app-user-card/app-user-card';
import { useSelector } from 'react-redux';
import { User } from '../../models/user';
import { usePanel } from '../../providers/panel/panel-provider';

const UserProfile: React.FC = () => {
  
  // console.log('USER', user);
  const panel = usePanel();
  return (
    <BaseLayout>
      <Flex flexDir={'column'} gap={12}>
        <Text fontWeight={'600'} fontSize={'2xl'}>
          User Profile
        </Text>
        {/* <AppUserCard user={user as User} updateUser={() => {
            panel({
                title: 'Update Profile'
            })
        }} /> */}
        <AppButton>Sign Out</AppButton>
      </Flex>
    </BaseLayout>
  );
};

export default UserProfile;
