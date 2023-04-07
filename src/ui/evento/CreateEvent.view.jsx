import React, {useState} from 'react';
import {Divider, Text, Chip} from 'react-native-paper';
import {View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDateTimerPicker } from '../hooks/useDateTimePicker';

const CreateEventView = () => {
  const dateStartsPicker = useDateTimerPicker();
  const dateEndsPicker = useDateTimerPicker();
  const timeStartsPicker = useDateTimerPicker();
  const timeEndsPicker = useDateTimerPicker();

  const [textTittle, setTextTittle] = useState('');
  const [textDescricao, setTextDescricao] = useState('');
  const [salaSelecionada, setSalaSelecionada] = useState('');

  return (
    <KeyboardAvoidingView style={stylesModal.viewForm}>
        <TextInput
          style={stylesModal.title}
          placeholder="Tema do evento ..."
          placeholderTextColor="#030303"
          value={textTittle}
          onChangeText={text => setTextTittle(text)}
          cursorColor="#000"
          selectionColor="#000"
        />
        <Divider style={stylesModal.divider} />
        <View style={{marginBottom: 20}}>
          <Text variant="bodyLarge" style={stylesModal.label}>
            Início
          </Text>
          <View style={{...stylesModal.row, justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={dateStartsPicker.showDatepicker}>
              <Text variant="bodyLarge" style={stylesModal.label}>
                {dateStartsPicker.getDate().format('ddd. D MMMM YYYY')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={timeStartsPicker.showTimepicker}>
              <Text variant="bodyLarge" style={stylesModal.label}>
                {timeStartsPicker.getDate().format('H:mm')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text variant="bodyLarge" style={stylesModal.label}>
            Término
          </Text>
          <View style={{...stylesModal.row, justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={dateEndsPicker.showDatepicker}>
            <Text variant="bodyLarge" style={stylesModal.label}>
              {dateEndsPicker.getDate().format('ddd. D MMMM YYYY')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={dateEndsPicker.showTimepicker}>
            <Text variant="bodyLarge" style={stylesModal.label}>
              {timeEndsPicker.getDate().format('H:mm')}
            </Text>
          </TouchableOpacity>
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
          {['Babies', 'Kids', 'Juniores'].map( sala => {
            return(
              <Chip
                key={sala}
                icon={sala === salaSelecionada ? 'check' : ''}
                style={{marginRight: 20}}
                onPress={() => setSalaSelecionada(sala)}>
                {sala}
              </Chip>
            )
          })}
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
