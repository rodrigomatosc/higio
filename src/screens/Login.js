import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Input, Container, Button} from '../components';
import colors from '../colors';
import {login} from '../services/user';
import {useDispatch} from 'react-redux';
import {USER_LOGIN} from '../reducers';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const changeEmail = (event) => {
    setEmail(event.nativeEvent.text);
  };

  const changePass = (event) => {
    setPassword(event.nativeEvent.text);
  };

  const onClickLogin = async () => {
    setLoading(true);
    const token = await login({email, password});

    if (!token) {
      emitErrorLogin();
    } else {
      dispatch({type: USER_LOGIN, payload: {email, token}});

      clearScreen();
    }
    setLoading(false);
  };

  const onClickCreateAccount = () => {
    navigation.navigate('CreateAccount');
  };

  const clearScreen = () => {
    setEmail('');
    setPassword('');
  };

  const emitErrorLogin = () => {
    setErrorLogin(true);
    setTimeout(() => {
      setErrorLogin(false);
    }, 2000);
  };

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
            <Input placeholder="email" onChange={changeEmail} value={email} />
            <Input
              placeholder="password"
              password
              onChange={changePass}
              value={password}
            />

            <Text style={styles.errorLogin}>
              {errorLogin && 'Incorrect username or password'}
            </Text>
          </View>

          {/* buttons */}
          <View style={styles.containerButton}>
            <Button text="Login" onClick={onClickLogin} loading={loading} />
          </View>
        </View>

        {/* options */}

        <View style={styles.containerOptions}>
          {/* <TouchableOpacity style={styles.options} onPress={onClickForgetPass}>
            <Text style={styles.textOptions}>forgot password ?</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.options}
            onPress={onClickCreateAccount}>
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
  errorLogin: {
    textAlign: 'center',
    color: 'red',
  },
});

export default Login;
