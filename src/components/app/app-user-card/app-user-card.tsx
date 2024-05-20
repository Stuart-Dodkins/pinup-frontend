import { Flex, Image, Text, Icon } from '@chakra-ui/react';
import { User } from '../../../models/user';
import { AppUserIcon } from '../app-user-icon/app-user-icon';
import { useSelector } from 'react-redux';
import { selectColor } from '../../../store/slices/user-icon-slice';
import { IoSettingsSharp } from "react-icons/io5";

export interface AppUserCardProps {
  image?: string;
  user: User;
  updateUser?: () => void;
}

const AppUserCard: React.FC<AppUserCardProps> = ({ image, user, updateUser }) => {
  const color = useSelector(selectColor);
  return (
    <Flex
      flexDir={'column'}
      align={'center'}
      justify={'start'}
      gap={4}
      boxShadow={'lg'}
      rounded={'2xl'}
      w={'100%'}
      pos={'relative'}
      p={4}
      border={'1px solid rgba(0, 0, 0, 0.1)'}
    >
      <Icon
        as={IoSettingsSharp}
        w={'25px'}
        h={'25px'}
        pos={'absolute'}
        top={4}
        right={4}
        _hover={{
          cursor: 'pointer',
        }}
        onClick={updateUser}
      />
      {image && (
        <Image
          src={image}
          w={'35px'}
          h={'35px'}
          objectFit={'contain'}
          objectPosition={'center'}
        />
      )}
      {!image && (
        <AppUserIcon
          h={'120px'}
          w={'120px'}
          fontSize={'2xl'}
          user={user}
          onClick={() => {}}
          bgColor={color}
        />
      )}
      <Flex align={'center'} gap={'10px'}>
        <Text fontSize={'lg'} fontWeight={'600'}>
          {user.firstName || 'Name'}
        </Text>
        <Text fontSize={'lg'} fontWeight={'600'}>
          {user.lastName || 'Surname'}
        </Text>
      </Flex>
      <Text fontSize={'lg'}>{user.contactInfo.email}</Text>
      <Text fontSize={'lg'}>{user.contactInfo.phone || 'Cell number here'}</Text>
      <Text fontSize={'lg'}>{user.contactInfo.address || 'Address here'}</Text>
    </Flex>
  );
};

export default AppUserCard;
