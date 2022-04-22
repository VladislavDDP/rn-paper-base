import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {Routes} from './src/navigation/Routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
};
