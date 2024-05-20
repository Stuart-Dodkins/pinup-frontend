import { Flex, Text, Image } from '@chakra-ui/react';
import { AppColors } from '../../../theme';

export interface AppBusinessCardProps {
  isNew?: boolean;
  isFeatured?: boolean;
  name: string;
  image?: string;
  description?: string;
  rating?: number;
  cta?: () => void;
}

export const AppBusinessCard: React.FC<AppBusinessCardProps> = ({
  isNew,
  isFeatured,
  name,
  description,
  rating,
  image,
  cta,
}) => {
  return (
    <Flex
      minH={'300px'}
      minW={'250px'}
      rounded={'2xl'}
      border={`1px solid ${AppColors.primary}`}
      _hover={{
        boxShadow: 'lg',
      }}
      pos={'relative'}
      flexDir={'column'}
      p={4}
    >
      <Image
        src={image}
        pos={'absolute'}
        top={0}
        left={0}
        w={'100%'}
        h={'50%'}
        objectFit={'contain'}
        objectPosition={'center'}
        borderTopRadius={'2xl'}
      />
      <Text fontSize={'20px'} fontWeight={'bold'}>
        {name}
      </Text>
      <Text fontSize={'20px'} fontWeight={'bold'} isTruncated>
        {description}
      </Text>
    </Flex>
  );
};
