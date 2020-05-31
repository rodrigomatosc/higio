import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../colors';

const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 10,
    backgroundColor: colors.buttonColor,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primaryColor,
  },
});

export default Header;
