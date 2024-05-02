import React from 'react';
import HeaderPemerintahan from '../../components/layout/headerPemerintahan';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import pemerintahan from '../../../assets/pemerintahan.png';

export default function Pemerintahan({ navigation }) {
  const data = Array.from({ length: 10 }, (_, index) => ({
    id: index.toString(),
    name: `Robong Sumlimbong ${index + 1}`,
    jabatan: 'Kepala Desa',
    image: pemerintahan,
  }));

  return (
    <View style={style.container}>
      <HeaderPemerintahan navigation={navigation} />
      <ScrollView contentContainerStyle={style.content} showsVerticalScrollIndicator={false}>
        {data.map((item, index) => (
          <View key={item.id} style={style.bg}>
            <Image source={item.image} style={style.img} />
            <Text style={style.name}>{item.name}</Text>
            <Text style={style.jabatan}>{item.jabatan}</Text>
          </View>
        ))}
        
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  content: {
    alignItems: 'center',
    margin: 10,
    paddingBottom:10
  },
  bg: {
    backgroundColor: '#ffffff',
    elevation: 2,
    padding: 20,
    width: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  img: {
    width: 157,
    height: 172,
    padding: 20,
    alignSelf: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 5,
  },
  jabatan: {
    textAlign: 'center',
    color: '#404040',
  },
});
