import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HeaderOrganisasiDetail from "../../components/layout/headerdetailorganisasi";

export default function DetailOrganisasi({ navigation }) {
     return (
          <View style={styles.container}>
               <HeaderOrganisasiDetail navigation={navigation} />

               <View style={styles.content}>
                    <View style={styles.logo}>
                         <View>
                              <Image source={require('../../../assets/organisasi/kt.png')} />
                              <Text style={styles.nama}>Karang Taruna</Text>
                              <Text style={styles.alamat}>Jln Sosor Dolok 056</Text>
                         </View>
                    </View>
                    <Text style={styles.deskripsi}>
                         Karang Taruna adalah sebuah organisasi kepemudaan di Indonesia yang bertujuan mengembangkan potensi dan kreativitas generasi muda serta berperan aktif dalam pembangunan masyarakat
                    </Text>
                    <View style={styles.mainTable}>
                         <View style={styles.table}>
                              <Text style={{ color: 'white' }}>Tahun berdiri</Text>
                              <Text style={{ color: 'white' }}>1960</Text>
                         </View>
                         <View style={styles.tablew}>
                              <Text style={{ color: 'black' }}>Ketua</Text>
                              <Text style={{ color: 'black' }}>1960</Text>
                         </View>
                         <View style={styles.table}>
                              <Text style={{ color: 'white' }}>Wakil Ketua</Text>
                              <Text style={{ color: 'white' }}>Elvis Kristopel</Text>
                         </View>
                         <View style={styles.tablew}>
                              <Text style={{ color: 'black' }}>Sekretaris</Text>
                              <Text style={{ color: 'black' }}>Wiwin Panjaitan</Text>
                         </View>
                         <View style={styles.table}>
                              <Text style={{ color: 'white' }}>Bendahara</Text>
                              <Text style={{ color: 'white' }}>Joel Artinus Pane</Text>
                         </View>
                         <View style={styles.tablew}>
                              <Text style={{ color: 'black' }}>Jumlah Anggota</Text>
                              <Text style={{ color: 'black' }}>129  Orang</Text>
                         </View>
                    </View>
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
          marginLeft: 22,
          marginRight: 22

     },
     logo: {
          flexDirection: 'row',
          justifyContent: 'center',

     },
     nama: {
          textAlign: 'center',
          fontSize: 20,
          fontWeight: '700'

     },
     alamat: {
          textAlign: 'center',
          color: '#676A6C'
     },
     deskripsi: {
          fontSize: 14,
          textAlign: 'justify',
          letterSpacing: 0.1,
          marginTop: 35
     },
     mainTable: {
          borderWidth: 1,
          borderColor: '#000000',
          borderStyle: 'solid',
          marginTop:40
     },
     table: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#40A2E3',
          padding: 5
     },
     tablew: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          padding: 5
     }

})