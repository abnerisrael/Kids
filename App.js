import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import BottomMenuBar, {BOTTOM_APPBAR_HEIGHT} from './src/ui/common/BottomMenuBar.component';
import AgendaView from './src/ui/agenda/Agenda.view';
import EquipeView from './src/ui/equipe/Equipe.view';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import CreateEventView from './src/ui/evento/CreateEvent.view';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator
            sceneContainerStyle={{paddingBottom: BOTTOM_APPBAR_HEIGHT}}
            tabBar={props => (
              <BottomMenuBar
                {...props}
                onPressFAB={() => props.navigation.navigate('CreateEvent')}
              />
            )}>
            <Tab.Group>
              <Tab.Screen name="Agenda" component={AgendaView} />
              <Tab.Screen name="Equipe" component={EquipeView} />
            </Tab.Group>
            <Tab.Group
              screenOptions={{presentation: 'modal', headerShown: false}}>
              <Tab.Screen name="CreateEvent" component={CreateEventView} />
            </Tab.Group>
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
