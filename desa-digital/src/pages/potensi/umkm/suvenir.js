import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import MapIcon from '../../../components/icon/map';
import suvenir from '../../../../assets/umkm/makanan/suvenir.png';
import HeaderSuvenir from '../../../components/layout/headerSuvenir';

export default function UmkmSuvenir({ navigation }) {
  const data = [
    { id: 1, title: 'Otsky Gelang Pria & Wanita Rubber', price: 'IDR 120.000', location: 'Sosor Dolok', image: suvenir },
    { id: 2, title: 'Otsky Gelang Pria & Wanita Rubber', price: 'IDR 120.000', location: 'Sosor Dolok', image: suvenir },
    { id: 3, title: 'Otsky Gelang Pria & Wanita Rubber', price: 'IDR 120.000', location: 'Sosor Dolok', image: suvenir },
    { id: 4, title: 'Otsky Gelang Pria & Wanita Rubber', price: 'IDR 120.000', location: 'Sosor Dolok', image: suvenir },
  ];

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={style.bg}>
      <Image source={item.image} style={style.img} />
      <Text style={style.title}>{item.title}</Text>
      <Text style={style.price}>{item.price}</Text>
      <View style={style.location}>
        <MapIcon />
        <Text style={style.txtLocation}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={style.container}>
      <HeaderSuvenir navigation={navigation} />
      <View style={style.content}>
        <FlatList
          data={data}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={style.listContainer}
        />
      </View>
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
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  listContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    margin: 3,
  },
  price: {
    color: '#E13A3A',
    fontSize: 12,
    margin: 3,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3,
  },
  txtLocation: {
    color: '#1877F2',
  },
  bg: {
    flex: 1,
    margin: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 2,
  },
  img: {
    width: '100%',
    height: 136,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
