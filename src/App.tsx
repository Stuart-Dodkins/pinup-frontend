import { ChakraProvider } from '@chakra-ui/react';
import { AppRouter } from './router/router';
import { theme } from './theme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PanelServiceProvider } from './providers/panel/panel-provider';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <PanelServiceProvider>
          <AppRouter></AppRouter>
        </PanelServiceProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
