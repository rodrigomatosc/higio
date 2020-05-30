import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container, Button} from '../components';
import colors from '../colors';

// import { Container } from './styles';

const Animation = () => {
  return (
    <Container>
      <View style={styles.content}>
        <View style={styles.containerText}>
          <Text style={styles.text}>congratulations</Text>
          <Text style={styles.description}>Description</Text>
          <View style={styles.containerImage}></View>
        </View>
        <View style={styles.containerButton}>
          <Button
            styleButton={styles.button}
            styleText={styles.textButton}
            text="OK"
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.buttonColor,
  },
  containerText: {
    flex: 1,
    marginTop: 100,
  },
  containerImage: {
    height: 200,
    backgroundColor: 'white',
    marginTop: 50,
  },
  image: {},
  text: {
    color: colors.textAnimation,
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'center',
  },
  description: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    color: colors.textAnimation,
  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 100,
  },
  button: {
    backgroundColor: colors.primaryColor,
  },
  textButton: {
    color: colors.buttonColor,
  },
});

export default Animation;
