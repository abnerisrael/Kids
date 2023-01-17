/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  Provider as PaperProvider,
  Divider,
  Text,
  Chip,
} from 'react-native-paper';
import BottomMenuBar from './src/ui/common/BottomMenuBar';
import AgendaView from './src/ui/agenda/AgendaView';
import EquipeView from './src/ui/equipe/EquipeView';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  const [showModal, setShowModal] = useState(1);
  const [textTittle, setTextTittle] = useState('');
  const [textDescricao, setTextDescricao] = useState('');

  // ref
  const bottomSheetRef = useRef(null); //BottomSheet

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator tabBar={props => <BottomMenuBar {...props} />}>
            <Tab.Screen name="Agenda" component={AgendaView} />
            <Tab.Screen name="Equipe" component={EquipeView} />
          </Tab.Navigator>
        </NavigationContainer>
        <BottomSheet
          ref={bottomSheetRef}
          index={showModal}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <BottomSheetScrollView style={stylesModal.viewForm}>
            <BottomSheetTextInput
              style={stylesModal.title}
              placeholder="Tema"
              placeholderTextColor="#000"
              value={textTittle}
              onChangeText={text => setTextTittle(text)}
              cursorColor="#000"
              selectionColor="#000"
            />
            <Divider style={stylesModal.divider} />
            <Text variant="bodyLarge" style={stylesModal.label}>
              Aula
            </Text>
            <Divider style={stylesModal.divider} />
            <View style={{marginBottom: 20}}>
              <Text variant="bodyLarge" style={stylesModal.label}>
                Início
              </Text>
              <View
                style={{...stylesModal.row, justifyContent: 'space-between'}}>
                <Text variant="bodyLarge" style={stylesModal.label}>
                  Dom. 04 de Dezembro de 2022
                </Text>
                <Text variant="bodyLarge" style={stylesModal.label}>
                  19:30
                </Text>
              </View>
            </View>
            <View>
              <Text variant="bodyLarge" style={stylesModal.label}>
                Término
              </Text>
              <View
                style={{...stylesModal.row, justifyContent: 'space-between'}}>
                <Text variant="bodyLarge" style={stylesModal.label}>
                  Dom. 04 de Dezembro de 2022
                </Text>
                <Text variant="bodyLarge" style={stylesModal.label}>
                  19:30
                </Text>
              </View>
            </View>
            <Divider style={stylesModal.divider} />
            <View style={stylesModal.row}>
              <Icon
                name="account-group"
                size={20}
                color="#000"
                style={stylesModal.iconSection}
              />
              <Text variant="bodyLarge" style={stylesModal.label}>
                Equipe
              </Text>
            </View>
            <Divider style={stylesModal.divider} />
            <View style={stylesModal.row}>
              <Icon
                name="door-closed"
                size={20}
                color="#000"
                style={stylesModal.iconSection}
              />
              <Text variant="bodyLarge" style={stylesModal.label}>
                Sala
              </Text>
            </View>
            <View style={{...stylesModal.row, marginTop: 10}}>
              <Chip
                style={{marginRight: 20}}
                onPress={() => console.log('Pressed')}>
                Babies
              </Chip>
              <Chip
                style={{marginRight: 20}}
                onPress={() => console.log('Pressed')}>
                Kids
              </Chip>
              <Chip
                style={{marginRight: 20}}
                icon="check"
                onPress={() => console.log('Pressed')}>
                Juniores
              </Chip>
            </View>
            <Divider style={stylesModal.divider} />
            <View style={stylesModal.row}>
              <Icon
                name="text"
                size={20}
                color="#000"
                style={stylesModal.iconSection}
              />
              <Text variant="bodyLarge" style={stylesModal.label}>
                Descrição
              </Text>
            </View>
            <BottomSheetTextInput
              style={stylesModal.textArea}
              cursorColor="#000"
              selectionColor="#000"
              editable
              multiline
              numberOfLines={4}
              maxLength={255}
              placeholderTextColor="#000"
              placeholder="Escreva uma descrição ..."
              value={textDescricao}
              onChangeText={text => setTextDescricao(text)}
            />
          </BottomSheetScrollView>
        </BottomSheet>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

const stylesModal = StyleSheet.create({
  viewForm: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  title: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    lineHeight: 20,
    color: '#000',
    fontSize: 28,
    fontFamily: 'Roboto Regular',
  },
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    lineHeight: 20,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Roboto Regular',
  },
  textArea: {
    marginTop: -20,
    borderRadius: 10,
    lineHeight: 20,
    color: '#000',
    fontSize: 16,
    fontFamily: 'Roboto Regular',
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  row: {flexDirection: 'row'},
  iconSection: {marginRight: 5},
  label: {color: '#000'},
});

export default App;
