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
import Pengumuman from '../pages/pengumuman';
import DetailPengumuman from '../pages/pengumuman/detail';
import Anggaran from '../pages/apbdes';
import DetailApbdes from '../pages/apbdes/detail';
import Berita from '../pages/berita';
import DetailBerita from '../pages/berita/detailBerita';
import Penduduk from '../pages/penduduk';
import DusunDetail from '../pages/penduduk/detailDusun';
import PendudukDetail from '../pages/penduduk/detailPenduduk';
import Wisata from '../pages/potensi/wisata';
import DetailWisata from '../pages/potensi/wisata/detail';
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
        <Stack.Screen name='detail-pengumuman' component={DetailPengumuman} options={{ headerShown: false }} />
        <Stack.Screen name='pengumuman' component={Pengumuman} options={{ headerShown: false }} />
        <Stack.Screen name='anggaran' component={Anggaran} options={{ headerShown: false }} />
        <Stack.Screen name='anggaran-detail' component={DetailApbdes} options={{ headerShown: false }} />
        <Stack.Screen name='berita' component={Berita} options={{ headerShown: false }} />
        <Stack.Screen name='detail-berita' component={DetailBerita} options={{ headerShown: false }} />
        <Stack.Screen name='penduduk' component={Penduduk} options={{ headerShown: false }} />
        <Stack.Screen name='detail-dusun' component={DusunDetail} options={{ headerShown: false }} />
        <Stack.Screen name='detail-penduduk' component={PendudukDetail} options={{ headerShown: false }} />
        <Stack.Screen name='wisata' component={Wisata} options={{headerShown:false}} />
        <Stack.Screen name='detail-wisata' component={DetailWisata} options={{headerShown:false}} />
      </Stack.Navigator>
      <StatusBar backgroundColor='#ffffff' style='dark' translucent={false} />
    </NavigationContainer>
  );
}
