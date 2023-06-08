import React from 'react';
import {View, TouchableNativeFeedback, StyleSheet} from 'react-native';
import {Card, Text} from 'react-native-paper';
import ParticipantsList from './components/ParticipantsList';


export default function ScheduleCard(props) {
  return (
    <TouchableNativeFeedback>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <Text variant="titleLarge" style={styles.type}>
              {props.type}
            </Text>
            <Text variant="titleLarge" style={styles.hour}>
              {props.horaInicial}
            </Text>
          </View>
          <Text variant="titleMedium" style={styles.theme}>
            {props.tema}
          </Text>
          <Text variant="bodyLarge" style={styles.description}>
            {props.descricao}
          </Text>
          <View style={styles.avatarsArea}>
            <ParticipantsList />
          </View>
        </Card.Content>
      </Card>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  header: {flexDirection: 'row', justifyContent: 'space-between'},
  type: {marginBottom: 5, fontWeight: 'bold'},
  theme: {marginBottom: 5, fontWeight: 'bold'},
  description: {marginBottom: 10},
  avatarsArea: {flexDirection: 'row'},
  hour: {fontSize: 18},
});
