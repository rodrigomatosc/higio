import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Input, Container, Button} from '../components';
import colors from '../colors';
import {create} from '../services/user';

// import { Container } from './styles';

const CreateAccount = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorCreate, setErrorCreate] = useState('');

  const changeEmail = (event) => {
    setEmail(event.nativeEvent.text);
  };

  const changePass = (event) => {
    setPassword(event.nativeEvent.text);
  };

  const changeName = (event) => {
    setName(event.nativeEvent.text);
  };

  const onClickCreate = async () => {
    setLoading(true);
    const user = await create({Name: name, Email: email, Password: password});

    if (!user) {
      emitErrorCreate();
    } else {
      clearScreen();
      navigation.goBack();
    }
    setLoading(false);
  };

  const clearScreen = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  const emitErrorCreate = () => {
    setErrorCreate(true);
    setTimeout(() => {
      setErrorCreate(false);
    }, 2000);
  };

  return (
    <Container>
      <View style={styles.content}>
        <View>
          {/* logo */}
          <View style={styles.containerLogo}>
            <Image source={require('../assets/images/logo.jpg')} />
            <Text style={styles.title}>Create Account</Text>
          </View>

          {/* inputs */}
          <View style={styles.containerInputs}>
            <Input placeholder="name" onChange={changeName} value={name} />
            <Input placeholder="email" onChange={changeEmail} value={email} />
            <Input
              placeholder="password"
              password
              onChange={changePass}
              value={password}
            />
            <Text style={styles.errorCreate}>
              {errorCreate && `Couldn't create your account. Try again.`}
            </Text>
          </View>

          {/* buttons */}
          <View style={styles.containerButton}>
            <Button
              text="Create Account"
              onClick={onClickCreate}
              loading={loading}
            />
            <Button
              text="Cancel"
              onClick={() => {
                navigation.goBack();
              }}
              styleButton={styles.buttonCancel}
              styleText={styles.buttonCancelText}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
    // marginVertical: 50,
  },
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
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
  buttonCancel: {
    backgroundColor: colors.primaryColor,
    borderColor: colors.buttonColor,
    borderWidth: 1,
  },
  buttonCancelText: {
    color: colors.buttonColor,
  },
  errorCreate: {
    textAlign: 'center',
    color: 'red',
  },
});
export default CreateAccount;
