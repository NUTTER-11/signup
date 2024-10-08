/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/Home';
import Login from './pages/login';
import Card1 from './pages/card1';
import SegmentedButton from './pages/segmentedbutton';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"   >
        <Stack.Screen name="Home" component={Home} options={{ title: 'My home' }} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="SegmentedButton" component={SegmentedButton} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

