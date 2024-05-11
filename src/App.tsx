import { ChakraProvider, Flex } from '@chakra-ui/react';
import { AppRouter } from './router/router';
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <AppRouter></AppRouter>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
