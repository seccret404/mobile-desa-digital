import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import HeaderHomestay from '../../../components/layout/headerHomestay';
import MapIcon from '../../../components/icon/map';
import h1 from '../../../../assets/fasilitas/h1.png'
import PhoneIcon from '../../../components/icon/phone';
export default function Homestay({ navigation }) {
     const goDetail = () =>{
          navigation.navigate('detail-homestay')
     }
     const data = [
          { id: 1, title: 'Homestay 1', des: '3 hari 2 malam', price: 'IDR 120.000', location: 'Samosir', image: h1, phone: '082423535' },
          { id: 2, title: 'Homestay 1', des: '3 hari 2 malam', price: 'IDR 120.000', location: 'Samosir', image: h1, phone: '082423535' },
          { id: 3, title: 'Homestay 1', des: '3 hari 2 malam', price: 'IDR 120.000', location: 'Samosir', image: h1, phone: '082423535' },
          { id: 4, title: 'Homestay 1', des: '3 hari 2 malam', price: 'IDR 120.000', location: 'Samosir', image: h1, phone: '082423535' },
     ];
     
     const renderProduct = ({ item }) => (
          <TouchableOpacity style={style.bg} onPress={goDetail} >
               <Image source={item.image} style={style.img} />
               <Text style={style.title}>{item.title}</Text>
               <View style={{ display: 'flex', flexDirection: 'row', margin: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, color: "#8C7979" }}>{item.des}</Text>
                    <Text style={style.price}>{item.price}</Text>
               </View>
               <View style={style.location}>
                    <PhoneIcon />
                    <Text style={style.txtLocation}>{item.phone}</Text>
               </View>
               <View style={style.location}>
                    <MapIcon />
                    <Text style={style.txtLocation}>{item.location}</Text>
               </View>
               <TouchableOpacity>
                    <Text style={{ margin: 5 }}>
                         Selengkapnya
                    </Text>
               </TouchableOpacity>
          </TouchableOpacity>
     );

     return (
          <View style={style.container}>
               <HeaderHomestay navigation={navigation} />
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
          fontWeight: '800'
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
