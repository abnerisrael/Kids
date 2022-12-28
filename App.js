/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import BottomMenuBar from './src/ui/common/BottomMenuBar';
import AgendaView from './src/ui/agenda/AgendaView';

const App = () => {
  return (
    <PaperProvider>
      <AgendaView />
      <BottomMenuBar />
    </PaperProvider>
  );
};

export default App;
