import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Input, Container, Button} from '../components';
import colors from '../colors';

// import { Container } from './styles';

const CreateAccount = () => {
  const onClick = () => {};

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
            <Input placeholder="name" />
            <Input placeholder="email" />
            <Input placeholder="password" />
          </View>

          {/* buttons */}
          <View style={styles.containerButton}>
            <Button text="Create Account" onClick={onClick} />
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
export default CreateAccount;
