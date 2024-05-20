import { TabPanel, TabPanelProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type AppTabPanelProps = {
  children: ReactNode;
} & TabPanelProps;

const AppTabPanel: React.FC<AppTabPanelProps> = ({ children, ...props }) => {
  return <TabPanel {...props}>{children}</TabPanel>;
};

export default AppTabPanel;