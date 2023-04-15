import React, {useState} from 'react';
import {Divider, Text, Chip, Button, Avatar} from 'react-native-paper';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDateTimerPicker} from '../hooks/useDateTimePicker';
import {useForm, Controller} from 'react-hook-form';
import {ScrollView} from 'react-native-gesture-handler';

type FormData = {
  tema: string;
  dataInicial: string;
  horaInicial: string;
  dataFinal: string;
  horaFinal: string;
  sala: string;
  descricao: string;
};

type Voluntario = {
  id: number;
  nome: string;
  funcao: Array<string>;
};

const CreateEventView = () => {
  const dateStartsPicker = useDateTimerPicker();
  const dateEndsPicker = useDateTimerPicker();
  const timeStartsPicker = useDateTimerPicker();
  const timeEndsPicker = useDateTimerPicker();
  const [professores, setProfessores] = useState<Voluntario[]>([]);
  const [auxiliares, setAuxiliares] = useState<Voluntario[]>([]);

  const onAddProfessor = () => {
    const professor: Voluntario = {
      id: Math.random() * 1,
      nome: 'teacher',
      funcao: ['professor'],
    };
    setProfessores([...professores, professor]);
  };

  const onAddAuxiliar = () => {
    const auxiliar: Voluntario = {
      id: Math.random() * 1,
      nome: 'teacher',
      funcao: ['auxiliar'],
    };
    setAuxiliares([...auxiliares, auxiliar]);
  };

  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit = formData => {
    let data: FormData = Object.assign({}, formData);
    data.dataInicial = dateStartsPicker.getDate().format('Y-MM-DD');
    data.horaInicial = timeStartsPicker.getDate().format('H:mm:00');
    data.dataFinal = dateEndsPicker.getDate().format('Y-MM-DD');
    data.horaFinal = timeEndsPicker.getDate().format('H:mm:00');
    console.log(data);
  };

  return (
    <KeyboardAvoidingView style={stylesModal.viewForm}>
      <ScrollView>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="tema"
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={stylesModal.title}
              placeholder="Tema do evento ..."
              placeholderTextColor="#030303"
              cursorColor="#000"
              selectionColor="#000"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.tema && (
          <Text style={{color: 'red'}}>Preencha este campo.</Text>
        )}

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
            <TouchableOpacity onPress={timeEndsPicker.showTimepicker}>
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
        <View style={stylesModal.row}>
          <Text variant="bodyLarge" style={stylesModal.label}>
            Professores
          </Text>
        </View>
        <View style={stylesModal.avatarsRow}>
          {professores.map((professor: Voluntario) => (
            <TouchableOpacity key={professor.id}>
              <Avatar.Image
                style={stylesModal.avatar}
                size={48}
                source={require('../../assets/img/cintia.jpeg')}
              />
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={onAddProfessor}>
            <Avatar.Icon style={stylesModal.avatar} size={48} icon="plus" />
          </TouchableOpacity>
        </View>
        <View style={stylesModal.row}>
          <Text variant="bodyLarge" style={stylesModal.label}>
            Auxiliares
          </Text>
        </View>
        <View style={stylesModal.avatarsRow}>
          {auxiliares.map((auxiliar: Voluntario) => (
            <TouchableOpacity key={auxiliar.id}>
              <Avatar.Image
                style={stylesModal.avatar}
                size={48}
                source={require('../../assets/img/cintia.jpeg')}
              />
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={onAddAuxiliar}>
            <Avatar.Icon style={stylesModal.avatar} size={48} icon="plus" />
          </TouchableOpacity>
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
        {errors.sala && (
          <Text style={{color: 'red'}}>Preencha este campo.</Text>
        )}
        <View
          style={{
            ...stylesModal.row,
            marginTop: 10,
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="sala"
            render={({field: {value}}) => {
              return ['Babies', 'Kids', 'Juniores', 'Todos', 'Nenhum'].map(
                sala => {
                  return (
                    <Chip
                      key={sala}
                      icon={sala === value ? 'check' : ''}
                      style={{marginRight: 10, marginBottom: 10}}
                      onPress={() => {
                        setValue('sala', sala);
                      }}>
                      {sala}
                    </Chip>
                  );
                },
              );
            }}
          />
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
        {errors.descricao && (
          <Text style={{color: 'red'}}>Preencha este campo.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="descricao"
          render={({field: {onChange, onBlur, value}}) => (
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
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Button mode="contained-tonal" onPress={handleSubmit(onSubmit)}>
          Salvar
        </Button>
      </ScrollView>
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
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  viewForm: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  title: {
    marginTop: 20,
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
  header: {flexDirection: 'row'},
  headerLeft: {alignItems: 'flex-start'},
  headerRight: {alignItems: 'flex-end'},
  row: {flexDirection: 'row'},
  iconSection: {marginRight: 5},
  label: {color: '#000'},
  avatar: {marginRight: 10, marginTop: 5, marginBottom: 5},
  avatarsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default CreateEventView;
