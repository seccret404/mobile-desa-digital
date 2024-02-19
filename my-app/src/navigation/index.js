import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/boarding/welcome';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
     <NavigationContainer>
     <Stack.Navigator initialRouteName='welcome'>
       <Stack.Screen name='welcome' component={Welcome} />
     </Stack.Navigator>
   </NavigationContainer>
    )
}
