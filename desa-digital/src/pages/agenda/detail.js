import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from "react-native";
import DetailAgenda from "../../components/layout/headerdetailagenda";
import MapIcon from '../../components/icon/map'
import PersonCheckIcon from '../../components/icon/checkperson'
export default function AgendaDetail({ navigation }) {

     const data = [
          { id: '1', image: require('../../../assets/kegiatan/agenda22.png') },
          { id: '2', image: require('../../../assets/kegiatan/agenda22.png') },
          { id: '3', image: require('../../../assets/kegiatan/agenda22.png') },
          { id: '4', image: require('../../../assets/kegiatan/agenda22.png') },

     ]
     return (
          <View style={styles.container}>
               <DetailAgenda navigation={navigation} />

               {/* content */}
               <View style={styles.content}>
                    <ScrollView>
                         <View style={styles.boxContent}>
                              <Image source={require('../../../assets/kegiatan/agenda22.png')} style={styles.img} height={182} borderRadius={5} />
                              <Text style={styles.title}>Sosialisasi Perhitungan Suara Pilpres</Text>
                              <Text style={styles.waktu}>15-03-2024</Text>
                              <View style={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
                                   <View>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                             <MapIcon />
                                             <Text style={{ marginLeft: 5 }}>Desa Tomok</Text>
                                        </View>
                                   </View>
                                   <View style={{ marginLeft: 20 }}>
                                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                             <PersonCheckIcon />
                                             <Text style={{ marginLeft: 5 }}>Ican CY Pane</Text>
                                        </View>
                                   </View>
                              </View>
                              <Text style={styles.tujuan}>Tujuan : Memberikan gambaran perhitungan suara</Text>
                              <Text style={styles.deskripsi}>
                                   Sosialisasi perhitungan suara dilakukanoleh pihak KPU. Agenda perhitungan suara oleh Komisi Pemilihan Umum (KPU) mencakup beberapa tahapan yang terinci. Setelah pemungutan suara selesai, kotak suara dari masing-masing Tempat Pemungutan Suara (TPS) dikumpulkan dan dibawa ke Tempat Pemungutan Suara (TPS) yang telah ditentukan sebelumnya. Di sana, proses dimulai dengan verifikasi surat suara untuk memastikan keabsahan dan keutuhan setiap surat suara. Kemudian, proses perhitungan dimulai secara transparan di hadapan saksi dari masing-masing calon atau partai politik yang bersaing, dengan menggunakan Sistem Informasi Perhitungan Suara (Situng) untuk mempercepat dan mempermudah proses. Setelah selesai, hasil perhitungan suara diumumkan secara resmi oleh KPU. Proses ini diawasi secara ketat untuk memastikan integritas dan akurasi, serta penanganan sengketa atau pengaduan jika terjadi kesalahan dalam perhitungan.
                              </Text>
                              <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 21, marginBottom: 9 }}>Dokumentasi Kegiatan</Text>
                              <View>
                                   <FlatList
                                        data={data}
                                        horizontal
                                        pagingEnabled
                                        showsHorizontalScrollIndicator={false}

                                        keyExtractor={(item) => item.id}
                                        renderItem={({ item }) => (
                                             <Image source={item.image} style={{ margin: 2 }} width={350} />
                                        )}
                                   />
                              </View>
                              <View style={styles.peserta}>
                                   <View>
                                        <Text style={{fontSize:16,fontWeight:'700',textAlign:'center'}}>Total Peserta</Text>
                                        <View style={styles.boxPeserta}>
                                             <Text style={{textAlign:'center',padding:15,color:'#ffffff'}}>129 Peserta</Text>
                                        </View>
                                   </View>

                              </View>

                             <View style={styles.boxAnggaran1}>
                             <View style={styles.anggaran}>
                                   <View style={styles.box}>
                                        <Text style={{color:'#ffffff',fontSize:14,textAlign:'center',marginBottom:5}}>Anggaran Desa</Text>
                                        <View style={styles.boxAnggaran}>
                                             <Text style={{padding:5,textAlign:'center'}}>
                                                  Rp 100.000.000
                                             </Text>
                                        </View>
                                   </View>
                                   <View style={styles.box}>
                                        <Text style={{color:'#ffffff',fontSize:14,textAlign:'center',marginBottom:5}}>Donasi</Text>
                                        <View style={styles.boxAnggaran}>
                                             <Text style={{padding:5,textAlign:'center'}}>
                                                  Rp 50.000.000
                                             </Text>
                                        </View>
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
          marginBottom: 10
     },
     boxContent: {
          margin: 16
     },
     title: {
          fontSize: 17,
          fontWeight: '700'
     },
     waktu: {
          fontSize: 12,
          color: 'rgba(103,106,108, 0.7)'
     },
     tujuan: {
          marginTop: 15,
          fontWeight: '700',
     },
     deskripsi: {
          textAlign: 'justify',
          letterSpacing: 0.1,
          fontSize: 14,
          marginTop: 15
     },
     peserta: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop:21
     },
     boxPeserta:{
          backgroundColor:'#0890EA',
          borderRadius:5,
          marginTop:3

     },
     anggaran:{
          backgroundColor:'#0890EA',
          borderRadius:5,
          width:329,
          marginTop:21,
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'center',
          
     },
     boxAnggaran:{
          backgroundColor:'#ffffff',
          width:112,
          borderRadius:5
     },
     box:{
       marginTop:21,marginBottom:21
     },
     img:{
          width:'full'
     },
     boxAnggaran1:{
          display:'flex',
          flexDirection:"column",
          justifyContent:'center',
          alignItems:'center'
     }
})