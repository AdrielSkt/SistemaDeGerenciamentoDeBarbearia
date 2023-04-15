import Home from './src/pages/Home';
import 'react-native-gesture-handler';

import store from './src/store';
import {fonts} from './src/styles/theme.json'
import {DefaultTheme, configureFonts, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';


const theme = {
  ...DefaultTheme,
    fonts: configureFonts(
      {
        ios: fonts,
        android: fonts,
      }
    )
}

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
          <Home/>
      </PaperProvider>   
    </StoreProvider>
  );
}

