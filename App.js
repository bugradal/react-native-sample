import * as React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// import pages
import Login from './Login'
import SignUp from './SignUp'

const Stack = createNativeStackNavigator();
const navigation = 
<NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="login" options={{ title: 'User Login' }} component={Login} />
  <Stack.Screen name="signUp"  options={{ title: 'Sign Up' }} component={SignUp} />
  </Stack.Navigator>
</NavigationContainer>

export default function App() {
  return (
    navigation
  );
}
