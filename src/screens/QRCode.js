import React from 'react';
import {
  View,
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Image,
  Dimensions,
} from 'react-native';
import {Header} from '../components';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const widthScreen = Dimensions.get('window').width;

const Scanner = () => {
  const onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  };
  return (
    <>
      <Header text="Scanner" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <Text style={styles.centerText}>
              Go to{' '}
              <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
              your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
        {/* <Image
          style={styles.image}
          source={{
            uri:
              'https://7labs.io/wp-content/uploads/2012/10/Generate-and-Read-QR-Codes-Online.png',
          }}
        /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  image: {width: widthScreen - 30, height: 400},
});
export default Scanner;
