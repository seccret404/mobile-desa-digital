import React from 'react';
import Footer from '../../components/layout/footer';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import profile from '../../../assets/profile.png'
import HeaderProfile from '../../components/layout/headerProfile';
import MapIcon from '../../components/icon/map';
export default function Profile({ navigation }) {
     const goPemerintahan = () => {
          navigation.navigate('pemerintahan')
     }
     return (
          <View style={styles.container}>
               <HeaderProfile navigation={navigation} />
               <View style={styles.content}>
                    <ScrollView>
                         <Image source={profile} />
                         <Text style={styles.DesaName}>
                              Desa Sosor Dolok
                         </Text>
                         <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                              <MapIcon />
                              <Text style={styles.alamat}>
                                   Jl Sosor gonting, Kecamatan Simanindo, Kabupaten Samosir
                              </Text>
                         </View>
                         <Text style={{ margin: 10, textAlign: 'justify' }}>
                              Desa Sosor Dolok adalah sebuah desa yang terletak di Kecamatan Sosor Gadong, Kabupaten Simalungun, Provinsi Sumatera Utara, Indonesia. Desa ini memiliki luas wilayah sekitar [sebutkan angka jika diketahui] kilometer persegi dan terdiri dari beberapa dusun, antara lain [sebutkan nama dusun jika diketahui]. Penduduk Desa Sosor Dolok mayoritas berprofesi sebagai petani dengan mata pencaharian utama bercocok tanam padi, karet, dan tanaman palawija lainnya. Desa ini dikenal dengan keindahan alamnya, seperti hamparan sawah yang hijau dan udara yang sejuk karena dikelilingi oleh perbukitan. Selain itu, Desa Sosor Dolok juga memiliki potensi wisata alam yang menarik, seperti air terjun dan hutan lindung, yang menawarkan pengalaman eksplorasi alam yang memikat bagi para wisatawan. Masyarakat Desa Sosor Dolok dikenal ramah dan memiliki kearifan lokal yang kental dalam menjaga kelestarian alam serta mempertahankan budaya tradisional mereka.
                         </Text>

                         <Text style={{ textAlign: 'center', color: "#0890EA", fontSize: 16, fontWeight: '700' }}>
                              Visi
                         </Text>
                         <Text style={{ backgroundColor: '#0890EA', color: '#ffffff', textAlign: 'center', marginLeft: 18, marginRight: 18, borderRadius: 5, fontSize: 12 }}>
                              "Menjadi Desa yang Mandiri, Berkembang, dan Berkelanjutan, Berlandaskan Kearifan Lokal serta Kebersamaan dalam Mewujudkan Kesejahteraan dan Keseimbangan Alam."
                         </Text>
                         <Text style={{ textAlign: 'center', color: "#0890EA", fontSize: 16, fontWeight: '700', marginTop: 10 }}>
                              Visi
                         </Text>
                         <Text style={{ backgroundColor: '#0D9276', color: '#ffffff', padding: 5, marginLeft: 18, marginRight: 18, borderRadius: 5, fontSize: 12 }}>
                              Berikut adalah contoh misi untuk Desa Sosor Dolok:
                              Meningkatkan Kesejahteraan Masyarakat: Melalui berbagai program dan kegiatan, kami bertujuan untuk meningkatkan kesejahteraan ekonomi, sosial, dan pendidikan masyarakat Desa Sosor Dolok.

                              Pengembangan Sumber Daya Manusia: Kami berkomitmen untuk meningkatkan kualitas pendidikan dan pelatihan, serta memberdayakan masyarakat dalam meningkatkan keterampilan dan potensi diri guna mencapai kemandirian.
                              Pemanfaatan Sumber Daya Alam yang Berkelanjutan: Kami akan memastikan pemanfaatan sumber daya alam Desa Sosor Dolok dilakukan secara bijaksana dan berkelanjutan, dengan menjaga kelestarian lingkungan dan mengutamakan prinsip-prinsip pelestarian alam.
                         </Text>
                         <View style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:10,marginBottom:10}}>
                              <TouchableOpacity style={{backgroundColor:'#0890EA',borderRadius:5}} onPress={goPemerintahan}>
                                   <Text style={{padding:8,color:'#ffffff'}}>
                                        Struktur Pemerintahan
                                   </Text>
                              </TouchableOpacity>
                         </View>
                    </ScrollView>
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
     DesaName: {
          fontSize: 16,
          fontWeight: '700',
          textAlign: 'center',
          marginTop: 20
     },
     alamat: {
          fontSize: 12,
          color: '#676A6C'
     }


});
