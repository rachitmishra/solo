/**
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screens/HomeScreen';
import AddScreen from 'screens/AddScreen';
import SettingScreen from 'screens/SettingScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="add" component={AddScreen} />
        <Stack.Screen name="settings" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return <AppStack />;
};

export default App;
