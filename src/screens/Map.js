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
          style={{width: 200,height: 200}}
          loadingEnabled={true}
          //showsUserLocation={true}
          inital = {region={
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          
        />
      </View>
    </View>
  );
};

export default Map;





