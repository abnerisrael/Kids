import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';

type Props = {
  key: React;
  avatarUri: string;
  onPress?: any;
  style?: {};
};

type ImgSource = {
  uri: string;
  cache: 'default' | 'reload' | 'force-cache' | 'only-if-cached';
};

const VolunteerAvatar = ({avatarUri, style, onPress}: Props) => {
  const src: ImgSource = {
    uri: avatarUri,
    cache: 'default',
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Avatar.Image style={style} size={48} source={src} />
    </TouchableOpacity>
  );
};

export default VolunteerAvatar;
