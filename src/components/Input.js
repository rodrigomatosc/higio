import React from 'react';
import {StyleSheet, TextInput, Dimensions} from 'react-native';
import colors from '../colors';

const Input = ({placeholder = 'no element', password, ...props}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.textInputColor}
      style={styles.textInput}
      secureTextEntry={password}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.inputColor,
    height: 50,
    margin: 10,
    borderRadius: 5,
    padding: 10,
    color: colors.textTitle,
  },
});

export default Input;
