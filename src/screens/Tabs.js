import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabIcon} from '../components';
import Scanner from './QRCode';
import Ranking from './Ranking';
import Profile from './Profile';
import Map from './Map';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          return <TabIcon name={route.name} focused={focused} />;
        },
      })}
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
      }}>
      <Tab.Screen name="Scanner" component={Scanner} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Ranking" component={Ranking} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
