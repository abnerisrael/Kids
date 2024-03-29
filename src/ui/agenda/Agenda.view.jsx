import React from 'react';
import {View, TouchableNativeFeedback } from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Text, Avatar} from 'react-native-paper';

const AgendaItem = props => {
  return (
    <TouchableNativeFeedback>
      <Card style={{marginRight: 10, marginTop: 17}}>
        <Card.Content>
          <View>
            <Text
              variant="titleLarge"
              style={{marginBottom: 5, fontWeight: 'bold'}}>
              {props.item.type}
            </Text>
            <Text
              variant="titleMedium"
              style={{marginBottom: 5, fontWeight: 'bold'}}>
              {`Ás ${props.item.hour} - Sala: ${props.item.turma}`}
            </Text>
            <Text variant="bodyLarge" style={{marginBottom: 10}}>
              {props.item.title}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Avatar.Icon style={{marginRight: 10}} size={48} icon="account" />
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableNativeFeedback>
  );
};

const AgendaView = () => {
  return (
    <Agenda
      items={{
        '2022-12-27': [
          {
            type: 'Aula',
            turma: 'Kids',
            title: 'Deus Jesus e o E.S.',
            hour: '18:00',
          },
          {
            type: 'Aula',
            turma: 'Kids',
            title: 'Deus Jesus e o E.S.',
            hour: '18:00',
          },
        ],
        '2022-12-28': [
          {
            type: 'Aula',
            turma: 'Kids',
            title: 'Deus Jesus e o E.S.',
            hour: '18:00',
          },
          {
            type: 'Aula',
            turma: 'Kids',
            title: 'Deus Jesus e o E.S.',
            hour: '18:00',
          },
        ],
      }}
      // Callback that gets called when items for a certain monthr should be loaded (month became visible)
      loadItemsForMonth={month => {
        console.info(month);
      }}
      renderItem={item => <AgendaItem item={item} />}
      pastScrollRange={1}
      futureScrollRange={1}
    />
  );
};

export default AgendaView;
