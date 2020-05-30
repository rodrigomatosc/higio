import React from 'react';
import {View} from 'react-native';
import {Header} from '../components';
import MapView from 'react-native-maps';

// import { Container } from './styles';

const Map = ({locations}) => {
  return (
    <View>
      <Header text="Recyclings" />
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          loadingEnabled
        />
      </View>
    </View>
  );
};

export default Map;
