import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import CreateAccount from './screens/CreateAccount';
import Tabs from './screens/Tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const Routes = () => {
  const token = useSelector((state) => state?.user?.token);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!token && <Stack.Screen name="Login" component={Login} />}
        {!token && (
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
        )}
        {token && <Stack.Screen name="Home" component={Tabs} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
