import React from 'react';
import HeaderWisata from '../../../components/layout/headerwisata';
import Footer from '../../../components/layout/footer';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import wisataImg from '../../../../assets/wisata/wisata.png'
export default function Wisata({ navigation }) {
     const goDetail = () =>{
          navigation.navigate('detail-wisata')
     }
     return (
          <View style={styles.container}>
               <HeaderWisata navigation={navigation} />
               <View style={styles.content}>
                    <View style={styles.boxCard}>
                         <View style={styles.card}>
                              <Image source={wisataImg} style={styles.img} />
                              <Text style={styles.title}>
                                   Bukit Holbung
                              </Text>
                              <Text style={styles.deskripsi}>
                                   Bukit Holbung adalah salah satu destinasi wisata alam yang tersembunyi namun
                                   menakjubkan di 
                              </Text>
                              <TouchableOpacity style={styles.link} onPress={goDetail}>
                                   <Text style={{color:'#0369A1'}}>
                                        Selengkapnya
                                   </Text>
                              </TouchableOpacity>

                         </View>
                         <View style={styles.card}>
                              <Image source={wisataImg} style={styles.img} />
                              <Text style={styles.title}>
                                   Bukit Holbung
                              </Text>
                              <Text style={styles.deskripsi}>
                                   Bukit Holbung adalah salah satu destinasi wisata alam yang tersembunyi namun
                                   menakjubkan di
                              </Text>
                              <TouchableOpacity style={styles.link}>
                                   <Text style={{color:'#0369A1'}}>
                                        Selengkapnya
                                   </Text>
                              </TouchableOpacity>

                         </View>
                         
                    </View>
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
