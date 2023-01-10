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
import EquipeView from './src/ui/equipe/EquipeView';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <BottomMenuBar {...props} />}>
          <Tab.Screen name="Agenda" component={AgendaView} />
          <Tab.Screen name="Equipe" component={EquipeView} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
