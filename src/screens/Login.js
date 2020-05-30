import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Input, Container, Button} from '../components';
import colors from '../colors';

const Login = () => {
  const onClick = () => {};

  const onClickCreateAccount = () => {};

  const onClickForgetPass = () => {};

  return (
    <Container>
      <View style={styles.content}>
        <View>
          {/* logo */}
          <View style={styles.containerLogo}>
            <Image source={require('../assets/images/logo.jpg')} />
            <Text style={styles.title}>Login</Text>
          </View>

          {/* inputs */}
          <View style={styles.containerInputs}>
            <Input placeholder="email" />
            <Input placeholder="password" />
          </View>

          {/* buttons */}
          <View style={styles.containerButton}>
            <Button text="Login" onClick={onClick} />
          </View>
        </View>

        {/* options */}

        <View style={styles.containerOptions}>
          <TouchableOpacity style={styles.options} onClick={onClickForgetPass}>
            <Text style={styles.textOptions}>forgot password ?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.options}
            onClick={onClickCreateAccount}>
            <Text style={styles.textOptions}>create account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 50,
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 70,
  },
  title: {
    color: colors.textTitle,
    fontSize: 24,
    fontWeight: '600',
  },
  containerInputs: {
    marginHorizontal: 10,
  },
  containerButton: {
    marginTop: 100,
  },
  containerOptions: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  options: {
    marginTop: 20,
  },
  textOptions: {
    color: colors.textInputColor,
  },
});

export default Login;
