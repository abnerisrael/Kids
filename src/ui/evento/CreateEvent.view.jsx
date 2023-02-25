import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Divider, Text, Chip} from 'react-native-paper';
import {View, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CreateEventView = () => {
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
    <KeyboardAvoidingView style={stylesModal.viewForm}>
        <TextInput
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
          <View style={{...stylesModal.row, justifyContent: 'space-between'}}>
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
          <View style={{...stylesModal.row, justifyContent: 'space-between'}}>
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
        <TextInput
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
    </KeyboardAvoidingView>
  );
};

const stylesModal = StyleSheet.create({
  sheet: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  btnClose: {
    alignSelf:'flex-end',
    marginRight: 20,
  },
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

export default CreateEventView;
