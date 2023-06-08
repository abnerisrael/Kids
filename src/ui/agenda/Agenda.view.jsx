import React from 'react';
import {Agenda} from 'react-native-calendars';
import ScheduleCard from './components/ScheduleCard/ScheduleCard';

const data = {
  '2023-06-08': [
    {
      type: 'Aula',
      sala: 'Kids',
      tema: 'Deus Jesus e o E.S.',
      descricao: 'bla bla bla',
      horaInicial: '19:00',
      dataInicial:'2023-06-08',
      volunteer_ids: [1, 2, 3, 4, 5]
    },
    {
      type: 'Aula',
      sala: 'Kids',
      tema: 'Deus Jesus e o E.S.',
      descricao: 'bla bla bla',
      horaInicial: '18:00',
      dataInicial:'2023-06-08',
      volunteer_ids: [3, 4]
    },
  ],
  '2023-06-09': [
    {
      type: 'Aula',
      sala: 'Kids',
      tema: 'Deus Jesus e o E.S.',
      descricao: 'bla bla bla',
      horaInicial: '19:00',
      dataInicial:'2023-06-08',
      volunteer_ids: [1, 2]
    },
    {
      type: 'Aula',
      sala: 'Kids',
      tema: 'Deus Jesus e o E.S.',
      descricao: 'bla bla bla',
      horaInicial: '18:00',
      dataInicial:'2023-06-08',
      volunteer_ids: [3, 4]
    },
  ],
};

const AgendaView = () => {
  return (
    <Agenda
      items={data}
      // Callback that gets called when items for a certain monthr should be loaded (month became visible)
      loadItemsForMonth={month => {
        console.info(month);
      }}
      renderItem={props => <ScheduleCard {...props} />}
      pastScrollRange={1}
      futureScrollRange={1}
    />
  );
};

export default AgendaView;
