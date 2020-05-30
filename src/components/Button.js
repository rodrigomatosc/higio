import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../colors';

const Button = ({text, onClick, styleButton, styleText}) => {
  return (
    <TouchableOpacity style={[styles.button, styleButton]} onClick={onClick}>
      <Text style={[styles.text, styleText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonColor,
    margin: 10,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 60,
  },
  text: {
    textAlign: 'center',
    color: colors.textButtonColor,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Button;
