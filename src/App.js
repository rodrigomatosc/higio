/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
import Profile from './screens/Profile';
import Ranking from './screens/Ranking';
import Map from './screens/Map';
import Animation from './screens/Animation';
import Scanner from './screens/QRCode';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabIcon} from './components';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default App;
