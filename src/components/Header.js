import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 70,
    marginBottom: 24,
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
  },
});

export default Header;
