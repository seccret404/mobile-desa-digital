import React from "react";
import { View,Text,StyleSheet,ScrollView,Image } from "react-native";
import HeaderBerita from "../../components/layout/headernerita";

export default function DetailBerita({navigation}){
     return(
          <View style={styles.container}>
               <HeaderBerita navigation={navigation}/>
               <View style={styles.content}>
                    <ScrollView>
                         <View style={styles.boxImg}>
                         <Image source={require('../../../assets/Berita/berita.png')} style={styles.img}/>
                         </View>
                         <Text style={styles.title}>Sosialisasi Perhitungan Suara Pilpres</Text>
                         <Text style={styles.kategori}>Bantuan Sosial</Text>
                         <Text style={styles.deskripsi}>
                         Sosialisasi perhitungan suara dilakukanoleh pihak KPU. Agenda perhitungan suara oleh Komisi Pemilihan Umum (KPU) mencakup beberapa tahapan yang terinci. Setelah pemungutan suara selesai, kotak suara dari masing-masing Tempat Pemungutan Suara (TPS) dikumpulkan dan dibawa ke Tempat Pemungutan Suara (TPS) yang telah ditentukan sebelumnya. Di sana, proses dimulai dengan verifikasi surat suara
                          untuk memastikan keabsahan dan keutuhan setiap surat suara. Kemudian, proses perhitungan dimulai secara transparan di hadapan saksi dari masing-masing calon atau partai politik yang bersaing, dengan menggunakan Sistem Informasi Perhitungan Suara (Situng) untuk mempercepat dan mempermudah proses.
                         </Text>
                    </ScrollView>
               </View>
          </View>
     )
}

const styles = StyleSheet.create({
     container:{
          flex:1,
          flexDirection:'column',
          justifyContent:'space-between',
          backgroundColor:'#ffffff'
     },
     content:{
          flex:1,
          marginBottom:10,
          display:'flex',
          justifyContent:'center',
          marginLeft:20,
          marginRight:20
     },
     title:{
          fontSize:16,
          fontWeight:'700',
          marginTop:18
     },
     kategori:{
          fontSize:12,
          color:'rgba(103, 106, 108, 0.7)'
     },
     deskripsi:{
          fontSize:14,
          letterSpacing:0.3,
          textAlign:"justify",
          marginTop:10
     },
     boxImg:{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          marginTop:10
     },
     img:{
          width:300,
          height:200,
          borderRadius:5
     }
    
    
})