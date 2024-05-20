import {
  Text,
  Tabs,
  BoxProps,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { AppColors } from '../../../theme';

export type AppTabsProps = {
  titles: string[];
  tabs: ReactNode[];
  panelHeight?: string;
  colorScheme?: string;
} & BoxProps;

const AppTabs: React.FC<AppTabsProps> = ({
  titles,
  tabs,
  panelHeight = '100%',
  colorScheme = 'blue',
  ...props
}) => {
  return (
    <Box {...props}>
      <Tabs isFitted w={'100%'} rounded={'2xl'} colorScheme={colorScheme}>
        <TabList
          borderBottom={'none'}
          display={'flex'}
          justifyContent={'center'}
          borderTopRadius={'2xl'}
        >
          {titles.map((title, index) => (
            <Tab key={`${title}-${index}`} maxW={'180px'} _active={{
                color: AppColors.secondary,
                borderBottom: AppColors.highlight
            }}>
              <Text color={AppColors.appTextColor} fontWeight={'600'}>
                {title}
              </Text>
            </Tab>
          ))}
        </TabList>
        <TabPanels h={panelHeight} overflow={'auto'} p={0} mt={4}>
          {tabs.map((tab, index) => (
            <TabPanel key={index}>{tab}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AppTabs;
