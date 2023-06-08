import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import VolunteerAvatar from '../../../../components/VolunteerAvatar';

const imgUrl =
  'https://photografos.com.br/wp-content/uploads/2020/12/fotografia.jpg';

export default function ParticipantsList(props) {
  return (
    <>
      <VolunteerAvatar
        key={0}
        avatarUri={imgUrl}
        style={styles.avatar}
        onPress={() => {}}
      />
      <VolunteerAvatar
        key={1}
        avatarUri={imgUrl}
        style={styles.avatar}
        onPress={() => {}}
      />
      <VolunteerAvatar
        key={2}
        avatarUri={imgUrl}
        style={styles.avatar}
        onPress={() => {}}
      />
      <VolunteerAvatar
        key={3}
        avatarUri={imgUrl}
        style={styles.avatar}
        onPress={() => {}}
      />
      <Text style={styles.labelMore}>+2</Text>
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {marginRight: 10, marginTop: 5, marginBottom: 5},
  labelMore: {alignSelf: 'center'},
});
