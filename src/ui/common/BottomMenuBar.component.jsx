import * as React from 'react';
import {StyleSheet, Keyboard} from 'react-native';
import {Appbar, FAB, useTheme} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const BottomMenuBar = ({navigation, onPressFAB}) => {
  const {bottom} = useSafeAreaInsets();
  const theme = useTheme();

  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return isKeyboardVisible ? (
    <></>
  ) : (
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: theme.colors.elevation.level2,
        },
      ]}
      safeAreaInsets={{bottom}}>
      <Appbar.Action
        icon="calendar"
        onPress={() => navigation.navigate('Agenda')}
      />
      <Appbar.Action
        icon="account-supervisor"
        onPress={() => navigation.navigate('Equipe')}
      />
      <FAB
        mode="flat"
        size="medium"
        icon="plus"
        onPress={onPressFAB}
        style={[
          styles.fab,
          {top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2},
        ]}
      />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});

export default BottomMenuBar;
