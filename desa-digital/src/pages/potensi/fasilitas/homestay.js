import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import HeaderHomestay from '../../../components/layout/headerHomestay';
import MapIcon from '../../../components/icon/map';
import PhoneIcon from '../../../components/icon/phone';
import { getHomestay } from '../../../services/desaDigital.services';

export default function Homestay({ navigation }) {
     const [homeStay, setHomeStay] = useState([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchHomestay = async () => {
               try {
                    const response = await getHomestay();
                    if (response.code === 200) {
                         setHomeStay(response.data || []);
                    } else {
                         console.error('Error fetching fasilitas:', response.message);
                    }
               } catch (error) {
                    console.error('Error fetching fasilitas:', error);
               } finally {
                    setLoading(false);
               }
          };
          fetchHomestay();
     }, []);

     const goDetail = (id) => {
          navigation.navigate('detail-homestay', { id });
     };

     const truncateText = (text, maxLength) => {
          if (text.length <= maxLength) return text;
          return text.substr(0, maxLength) + '...';
     };

     const renderProduct = ({ item }) => (
          <TouchableOpacity style={style.bg} onPress={() => goDetail(item.id)}>
               <Image source={{ uri: item.gambar5 }} style={style.img} />
               <Text style={style.title}>{item.namaPenginapan}</Text>
               <View style={{ display: 'flex', flexDirection: 'row', margin: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, color: "#8C7979" }}>{item.des}</Text>
                    <Text style={style.price}>{truncateText(item.deskripsi,50)}</Text>
               </View>
               <View style={style.location}>
                    <PhoneIcon />
                    <Text style={style.txtLocation}>{item.kontak}</Text>
               </View>
               <View style={style.location}>
                    <MapIcon />
                    <Text style={style.txtLocation}>{item.lokasi}</Text>
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
                         data={homeStay}
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
          width:150
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
