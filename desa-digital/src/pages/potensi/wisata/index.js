import React, { useEffect, useState } from 'react';
import HeaderWisata from '../../../components/layout/headerwisata';
import Footer from '../../../components/layout/footer';
import { View, StyleSheet, Text, Image, TouchableOpacity,FlatList } from 'react-native';
import wisataImg from '../../../../assets/wisata/wisata.png'
import { getWisata } from '../../../services/desaDigital.services';
export default function Wisata({ navigation }) {
     
          const [wisata, setWisata] = useState([]);
          useEffect(() =>{
               const fetchWisata = async () =>{
                    try{
                      const data = await getWisata();
                      setWisata(data)   
                    } catch (error) {
                         console.error('Error fetching wisata:', error);
                    }
                    
               }
               fetchWisata();
          },[])

          const renderItem = ({ item }) => (
               <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('detail-wisata', { id: item.id })}>
                 <Image source={{ uri: item.gambar }} style={styles.img} />
                 <Text style={styles.title}>{item.namaObjekWisata}</Text>
                 <Text style={styles.deskripsi}>{item.deskripsi}</Text>
                 <TouchableOpacity style={styles.link}>
                   <Text style={{ color: '#0369A1' }}>Selengkapnya</Text>
                 </TouchableOpacity>
               </TouchableOpacity>
             );
             
             

     return (
          <View style={styles.container}>
          <HeaderWisata navigation={navigation} />
          <View style={styles.content}>
               <FlatList
                    data={wisata}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
               />
          </View>
          <Footer navigation={navigation} />
     </View>
               
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
     },
     content: {
          flex: 1,
          marginBottom: 10,
     },
     boxCard: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        },
        card: {
          flex: 1,
          backgroundColor: '#FFFFFF',
          margin: 5,
          padding: 10,
          borderRadius: 5,
          elevation:2
        },
        img: {
          width: '100%',
          height: 122,
          marginBottom: 10,
        },
        title: {
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 5,
        },
        deskripsi: {
          fontSize: 14,
        },
        link:{
          marginTop:10,
          
        }
});
