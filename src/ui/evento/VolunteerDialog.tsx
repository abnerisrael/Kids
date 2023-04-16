import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Button, Dialog, Portal, Text} from 'react-native-paper';
import {Volunteer} from '../../data/interfaces/Volunteer.interface';

type Props = {
  visible: boolean;
  hideDialog: any;
  volunteer: Volunteer;
  onRemove: any;
};

const VolunteerDialog = ({visible, hideDialog, volunteer}: Props) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title style={styles.title}>Remover da equipe</Dialog.Title>
        <Dialog.Content style={styles.content}>
          <Avatar.Image source={{uri: volunteer?.avatarUrl}} />
          <Text variant="bodyMedium" style={styles.contentText}>
            {`${volunteer?.nome} será removido da equipe.`}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancelar</Button>
          <Button icon="trash-can-outline" onPress={() => console.log('Ok')}>
            Remover
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  content: {
    alignItems: 'center',
  },
  contentText: {
    marginTop: 10,
  },
});

export default VolunteerDialog;
