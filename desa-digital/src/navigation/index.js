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
import UMKM from '../pages/potensi/umkm';
import UmkmMakanan from '../pages/potensi/umkm/makanan';
import UmkmSuvenir from '../pages/potensi/umkm/suvenir';
import UmkmPakaian from '../pages/potensi/umkm/pakaian';
import Fasilitas from '../pages/potensi/fasilitas';
import Homestay from '../pages/potensi/fasilitas/homestay';
import DetailHomestay from '../pages/potensi/fasilitas/detailHomestay';
import Ibadah from '../pages/potensi/fasilitas/ibadah';
import DetailIbadah from '../pages/potensi/fasilitas/detailIbadah';
import Profile from '../pages/desa/profile';
import Pemerintahan from '../pages/desa/pemerintahan';
import DetailMakanan from '../pages/potensi/umkm/detailMakanan';
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
        <Stack.Screen name='umkm' component={UMKM} options={{headerShown:false}} />
        <Stack.Screen name='umkm-makanan' component={UmkmMakanan} options={{headerShown:false}} />
        <Stack.Screen name='detail-makanan' component={DetailMakanan} options={{headerShown:false}} />
        <Stack.Screen name='umkm-suvenir' component={UmkmSuvenir} options={{headerShown:false}} />
        <Stack.Screen name='umkm-pakaian' component={UmkmPakaian} options={{headerShown:false}} />
        <Stack.Screen name='fasilitas' component={Fasilitas} options={{headerShown:false}} />
        <Stack.Screen name='homestay' component={Homestay} options={{headerShown:false}} />
        <Stack.Screen name='detail-homestay' component={DetailHomestay} options={{headerShown:false}} />
        <Stack.Screen name='ibadah' component={Ibadah} options={{headerShown:false}} />
        <Stack.Screen name='detail-ibadah' component={DetailIbadah} options={{headerShown:false}} />
        <Stack.Screen name='profile' component={Profile} options={{headerShown:false}} />
        <Stack.Screen name='pemerintahan' component={Pemerintahan} options={{headerShown:false}} />
      </Stack.Navigator>
      <StatusBar backgroundColor='#ffffff' style='dark' translucent={false} />
    </NavigationContainer>
  );
}
