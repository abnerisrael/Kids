import React, {useState, useRef} from 'react';
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
import VolunteerAvatar from '../components/VolunteerAvatar';
import VolunteerDialog from './VolunteerDialog';
import Volunteer from '../../data/models/Volunteer.model';
import VolunteerUseCase from '../../domain/usecases/volunteer.usercase';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';

const volunteerList = VolunteerUseCase.list();

type FormData = {
  tema: string;
  dataInicial: string;
  horaInicial: string;
  dataFinal: string;
  horaFinal: string;
  sala: string;
  descricao: string;
  professores_ids: number[];
  auxiliares_ids: number[];
};

const CreateEventView = () => {
  const navigation = useNavigation();
  const dateStartsPicker = useDateTimerPicker();
  const dateEndsPicker = useDateTimerPicker();
  const timeStartsPicker = useDateTimerPicker();
  const timeEndsPicker = useDateTimerPicker();
  const [professores, setProfessores] = useState<Volunteer[]>([]);
  const [auxiliares, setAuxiliares] = useState<Volunteer[]>([]);
  const [volunteerSelected, setVolunteerSelected] = useState<Volunteer>({});

  const [visibleVolunteerDialog, setVisibleVolunteerDialog] =
    useState<boolean>(false);
  const hideVolunteerDialog = (): void => setVisibleVolunteerDialog(false);
  const showVolunteerDialog = (): void => setVisibleVolunteerDialog(true);

  const onProfessorPress = (id: number) => {
    let volunteer = professores.find(
      (professor: Volunteer) => professor.id === id,
    );
    setVolunteerSelected(volunteer);
    showVolunteerDialog();
  };

  const onAuxiliarPress = (id: number) => {
    let volunteer = auxiliares.find(
      (auxiliar: Volunteer) => auxiliar.id === id,
    );
    setVolunteerSelected(volunteer);
    showVolunteerDialog();
  };

  const pickerProfRef = useRef();

  function openProfPicker() {
    pickerProfRef.current.focus();
  }

  const pickerAuxRef = useRef();

  function openAuxPicker() {
    pickerAuxRef.current.focus();
  }

  const onAddProfessor = (id: number): void => {
    const professor = volunteerList.find(volunteer => volunteer.id === id);
    if (professor) {
      setProfessores([...professores, professor]);
    } else {
      console.error(`Professor id: ${id} não encontrado`);
    }
  };

  const onAddAuxiliar = (id: number): void => {
    const auxiliar = volunteerList.find(volunteer => volunteer.id === id);
    if (auxiliar) {
      setAuxiliares([...auxiliares, auxiliar]);
    } else {
      console.error(`Auxiliar id: ${id} não encontrado`);
    }
  };

  const removeProfessor = (id: number) => {
    const result = professores.filter((prof: Volunteer) => prof.id !== id);
    setProfessores(result);
  };

  const removeAuxiliar = (id: number) => {
    const result = auxiliares.filter((aux: Volunteer) => aux.id !== id);
    setAuxiliares(result);
  };

  const onRemoveVolunteer = () => {
    const {id}: Volunteer = volunteerSelected;
    removeProfessor(id);
    removeAuxiliar(id);
    hideVolunteerDialog();
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
    data.professores_ids = professores.map(({id}: Volunteer) => id);
    data.auxiliares_ids = auxiliares.map(({id}: Volunteer) => id);
    console.log(data);
  };

  return (
    <KeyboardAvoidingView style={stylesModal.viewForm}>
      <VolunteerDialog
        visible={visibleVolunteerDialog}
        hideDialog={hideVolunteerDialog}
        volunteer={volunteerSelected}
        onRemove={onRemoveVolunteer}
      />
      <View style={stylesModal.actionButtonsArea}>
        <Button
          mode="text"
          textColor="gray"
          compact
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
        <Button
          icon="calendar-check"
          mode="contained-tonal"
          onPress={handleSubmit(onSubmit)}>
          Agendar
        </Button>
      </View>
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
          {professores.map(({id, avatarUrl}: Volunteer) => (
            <VolunteerAvatar
              key={id}
              avatarUri={avatarUrl}
              style={stylesModal.avatar}
              onPress={() => onProfessorPress(id)}
            />
          ))}
          <Picker
            ref={pickerProfRef}
            selectedValue={''}
            onValueChange={onAddProfessor}>
            <Picker.Item key={0} label="Nenhum" value="" />
            {volunteerList.map(({id, nome}: Volunteer) => {
              return <Picker.Item key={id} label={nome} value={id} />;
            })}
          </Picker>
          <TouchableOpacity onPress={openProfPicker}>
            <Avatar.Icon style={stylesModal.avatar} size={48} icon="plus" />
          </TouchableOpacity>
        </View>
        <View style={stylesModal.row}>
          <Text variant="bodyLarge" style={stylesModal.label}>
            Auxiliares
          </Text>
        </View>
        <View style={stylesModal.avatarsRow}>
          {auxiliares.map(({id, avatarUrl}: Volunteer) => (
            <VolunteerAvatar
              key={id}
              avatarUri={avatarUrl}
              style={stylesModal.avatar}
              onPress={() => onAuxiliarPress(id)}
            />
          ))}
          <Picker
            ref={pickerAuxRef}
            selectedValue={''}
            onValueChange={onAddAuxiliar}>
            <Picker.Item key={0} label="Nenhum" value="" />
            {volunteerList.map(({id, nome}: Volunteer) => {
              return <Picker.Item key={id} label={nome} value={id} />;
            })}
          </Picker>
          <TouchableOpacity onPress={openAuxPicker}>
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
  avatarsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  avatar: {marginRight: 10, marginTop: 5, marginBottom: 5},
  actionButtonsArea: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
});

export default CreateEventView;
