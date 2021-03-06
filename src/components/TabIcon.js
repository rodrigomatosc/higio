import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../colors';

const icons = {
  Scanner: 'qrcode',
  Map: 'map-marker',
  Ranking: 'star-o',
  Profile: 'user-circle',
};

export default function TabBarIcon({name, focused}) {
  return (
    <Icon
      name={icons[name]}
      size={24}
      color={focused ? colors.tabTextOpacity : colors.textInputColor}
      style={styles.icon}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  containerFocused: {
    alignContent: 'center',
    justifyContent: 'center',
    top: -5,
  },
  wrapper: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  wrapperFocused: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E9761',
    borderRadius: 50,
    borderColor: '#ffff',
    borderWidth: 5,
    width: 50,
    height: 50,
  },
  text: {
    textAlign: 'center',
    color: '#C2C2C2',
  },
});
