import {useState} from 'react';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import moment, * as moments from 'moment';
import 'moment/locale/pt-br';

/**
 * If no arguments are provided,
 * the constructor will create a 
 * JavaScript Date object with the 
 * current date and time
 * according to the system settings.
 * See: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date#descrição
 * @param initialTimestampUnix 
 * @returns
 */
export const useDateTimerPicker = (initialTimestampUnix: number | null) => {
  moments.locale('pt-br');

  const initialDate: Date = initialTimestampUnix
    ? new Date(initialTimestampUnix)
    : new Date();

  const [date, setDate] = useState(initialDate);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = currentMode => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = (): void => {
    showMode('date');
  };

  const showTimepicker = (): void => {
    showMode('time');
  };

  const getDate = () => {
    return moment(date);
  }

  return {
    getDate,
    showDatepicker,
    showTimepicker,
  };
};
