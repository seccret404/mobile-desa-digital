import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import MapIcon from '../../../components/icon/map';
import ib1 from '../../../../assets/fasilitas/ib1.png'
import PhoneIcon from '../../../components/icon/phone';
import JamIcon from '../../../components/icon/jam';
import HeaderIbadah from '../../../components/layout/headerIbadah';
export default function Ibadah({ navigation }) {
     const goDetail = () =>{
          navigation.navigate('detail-ibadah')
     }
     const data = [
          { id: 1, title: 'Gereja 1',location: 'Samosir', image: ib1, phone: '082423535' },
          { id: 2, title: 'Gereja 1',location: 'Samosir', image: ib1, phone: '082423535' },
          { id: 3, title: 'Gereja 1',location: 'Samosir', image: ib1, phone: '082423535' },
          { id: 4, title: 'Gereja 1',location: 'Samosir', image: ib1, phone: '082423535' },
     ];
     
     const renderProduct = ({ item }) => (
          <TouchableOpacity style={style.bg} onPress={goDetail} >
               <Image source={item.image} style={style.img} />
               <Text style={style.title}>{item.title}</Text>
              
               <View style={style.location}>
                    <JamIcon />
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
               <HeaderIbadah navigation={navigation} />
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
          color: '#010101',
          marginLeft:5
          
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
