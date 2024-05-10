import { ChakraProvider, Flex } from '@chakra-ui/react';
import { AppRouter } from './router/router';
import { AppColors, theme } from './theme';
import { BaseLayout } from './components/layouts/base-layout';
import MainHomePage from './pages/mainHome/MainHome';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Flex bgColor={AppColors.appTextColor}>
        <AppRouter></AppRouter>
      </Flex> */}
      <BaseLayout>
        <MainHomePage />
      </BaseLayout>
    </ChakraProvider>
  );
}

export default App;
