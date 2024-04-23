import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import HeaderBerita from "../../components/layout/headernerita";
export default function Berita({ navigation }) {
     const goDetail = () =>{
          navigation.navigate('detail-berita');
     };
     return (
          <View style={styles.container}>
               <HeaderBerita navigation={navigation} />
               <View style={styles.content}>
                    <View style={styles.boxSearch}>
                         <TextInput placeholder='Cari' style={styles.textInput} />
                         <FontAwesome name='search' size={18} color='grey' style={styles.search} />
                    </View>
                    <ScrollView >
                         <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',marginBottom:10,alignItems:'center' }}>
                              <View style={styles.cardNews}>
                                   <View style={{ paddingLeft: 16, paddingTop: 7, paddingBottom: 7 }}>
                                        <Image source={require('../../../assets/Berita/berita.png')} width={95} height={95} borderRadius={5} />
                                   </View>
                                   <View style={styles.contentNews}>
                                        <Text style={styles.judul}>Sosialisasi Perhitungan Suara Pilpres </Text>
                                        <Text style={styles.waktu}>14/06/2023</Text>
                                        <Text style={styles.deskripsi}>Kunjungan ke PT TPL adalah pengalaman yang mendalam dalam pemahaman industri....</Text>
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: 195 }}>
                                             <TouchableOpacity style={styles.btn} onPress={goDetail}>
                                                  <Text style={styles.btnText}>Selengkapnya</Text>
                                             </TouchableOpacity>
                                        </View>
                                   </View>
                              </View>
                              

                              <View style={styles.cardNews}>
                                   <View style={{ paddingLeft: 16, paddingTop: 7, paddingBottom: 7 }}>
                                        <Image source={require('../../../assets/Berita/berita.png')} width={95} height={95} borderRadius={5} />
                                   </View>
                                   <View style={styles.contentNews}>
                                        <Text style={styles.judul}>Kunjungan ke PT.TPL</Text>
                                        <Text style={styles.waktu}>14/06/2023</Text>
                                        <Text style={styles.deskripsi}>Kunjungan ke PT TPL adalah pengalaman yang mendalam dalam pemahaman industri....</Text>
                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: 195 }}>
                                             <TouchableOpacity style={styles.btn}>
                                                  <Text style={styles.btnText}>Selengkapnya</Text>
                                             </TouchableOpacity>
                                        </View>
                                   </View>
                              </View>
                         </View>

                    </ScrollView>
               </View>

          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff'
     },
     content: {
          flex: 1,
          marginBottom: 10,
          display:'flex',
          justifyContent:'center',
          marginLeft: 15,
          marginRight: 15
     },
     textInput: {
          borderColor: '#111111',
          borderWidth: 0.5,
          height: 40,
          borderRadius: 30,
          width: '100%',
          padding: 8
     },
     boxSearch: {
          flexDirection: 'row',
          paddingLeft: 16,
          paddingRight: 16,
          marginTop: 15, marginBottom: 5
     },
     search: {
          position: 'absolute',
          right: 25,
          top: 10
     },
     judul: {
          fontSize: 12,
          fontWeight: '800',
     },
     waktu: {
          fontSize: 9,
          color: 'rgba(103, 106, 108, 0.7)',
     },
     deskripsi: {
          fontSize: 12,
          width: 195
     },
     btn: {
          backgroundColor: '#0890EA',
          width: 100,
          height: 25,
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
     },
     btnText: {
          color: '#ffffff',
          fontSize: 12,
     },
     cardNews: {
          width: 325,

          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          elevation: 2,
          marginTop: 15,
          borderRadius: 5
     },
     contentNews: {
          marginLeft: 5,
          width: 195,
          paddingRight: 16,
          paddingTop: 7,
          paddingBottom: 7
     }
})
