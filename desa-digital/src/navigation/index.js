import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingPage from '../components/layout/loadingPage';
import Home from '../pages/home';
import Welcome from '../pages/onboarding';
import AgendaDesa from '../pages/agenda';
import AgendaDetail from '../pages/agenda/detail';
import Organisasi from '../pages/organisasi';
import DetailOrganisasi from '../pages/organisasi/detail';

const Stack = createStackNavigator();

export default function AppNavigation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasikan penundaan dengan setTimeout
    setTimeout(() => {
      setLoading(false); // Hentikan loading setelah beberapa waktu
    }, 2000); // Ganti dengan waktu yang sesuai dengan kebutuhan Anda
  }, []);

  if (loading) {
    // Jika masih dalam tahap loading, tampilkan halaman loading
    return <LoadingPage />;
  }

  // Jika loading sudah selesai, tampilkan aplikasi dengan NavigationContainer
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcome'>
        <Stack.Screen name='welcome' component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='agenda' component={AgendaDesa} options={{ headerShown: false }} />
        <Stack.Screen name='agenda-detail' component={AgendaDetail} options={{ headerShown: false }} />
        <Stack.Screen name='organisasi' component={Organisasi} options={{ headerShown: false }} />
        <Stack.Screen name='organisasi-detail' component={DetailOrganisasi} options={{ headerShown: false }} />
      </Stack.Navigator>
      <StatusBar backgroundColor='#ffffff' style='dark' translucent={false} />
    </NavigationContainer>
  );
}
