import * as React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// import pages
import Login from './Login'
import SignUp from './SignUp'
function LoginStack () {
return (
<Stack.Navigator>
    <Stack.Screen name="login" options={{ title: 'Login' }} component={Login} />
    <Stack.Screen name="signUp" options={{ title: 'Sign Up' }} component={SignUp} />
</Stack.Navigator>
)}

// product stack
import Product from './Product'
import Detail from './Details'
function ProductStack () {
  return (
<Stack.Navigator >
  <Stack.Screen name="loginStack" options={{ headerShown: false }} component={LoginStack} />
  <Stack.Screen name="product"  options={{ title: 'Product', }} component={Product} />
  <Stack.Screen name="details"  options={{ title: 'Detail', }} component={Detail} />
</Stack.Navigator>
)}

const navigation =
<NavigationContainer>
  <ProductStack/>
</NavigationContainer>


export default function App() {
  return (
    navigation
  );
}

