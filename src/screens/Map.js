import React, {useState, useEffect} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {Header} from '../components';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {index} from '../services/trash';

const widthScreen = Dimensions.get('window').width;

const Map = () => {
  const token = useSelector((state) => state?.user?.token);
  const [bins, setBins] = useState([]);

  useEffect(() => {
    loadBins();
  });

  const renderBins = () => {
    <>
      <Marker
        coordinate={{latitude: 38.70120243, longitude: -9.2024231}}
        title={'Recycling'}
        description={''}
      />
    </>;
  };

  const loadBins = async () => {
    const bins = await index(token);
    console.log(bins);
    setBins(bins);
  };

  return (
    <View>
      <Header text="Recyclings" />
      <View style={styles.container}>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          showsUserLocation={true}
          initialRegion={{
            latitude: 38.70120243,
            longitude: -9.2024231,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {renderBins()}
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  map: {
    width: widthScreen,
    height: 700,
  },
});

export default Map;
