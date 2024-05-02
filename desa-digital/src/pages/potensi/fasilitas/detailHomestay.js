import React from 'react';
import Footer from '../../../components/layout/footer';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import h1 from '../../../../assets/fasilitas/h1.png'
import HeaderDetailHomestay from '../../../components/layout/headerDetailHomstay';
import WifIcon from '../../../components/icon/wifiIcon';
import ToiIcon from '../../../components/icon/toiletIcon';
import CsIcon from '../../../components/icon/csIcon';
import CpIcon from '../../../components/icon/cpIcon';
import AcIcon from '../../../components/icon/acIcon';
import BfIcon from '../../../components/icon/bfIcon';
import PhoneIcon from '../../../components/icon/phone';
import MailIcon from '../../../components/icon/mail';
export default function DetailHomestay({ navigation }) {
     const goHomestay = () => {
          navigation.navigate('homestay')
     }
     return (
          <View style={styles.container}>
               <HeaderDetailHomestay navigation={navigation} />
               <View style={styles.content}>
                    <ScrollView>
                    <Image source={h1} style={styles.img} />
                    <Text style={styles.title}>
                         Homestay 1
                    </Text>
                    <Text style={styles.des}>
                         Homestay 1 merupakan salah satu homestay yang tersedia di daerah Sosordolok. Homestay ini menyediakan fasilitas  terdapat ruang tamu, 3 kamar, 2 kamar mandi.
                    </Text>
                    <Text style={styles.subtitle}>
                         Mulai Dari
                    </Text>
                    <View style={styles.priceBox}>
                         <Text style={styles.prise}>IDR 50.000</Text>
                         <Text style={styles.priseR}>kamar/malam</Text>
                    </View>
                    <Text style={styles.subtitle}>
                         Fasilitas
                    </Text>
                    <View style={styles.boxF}>
                         <WifIcon/>
                         <Text style={styles.ket}>Tersedia Wifi</Text>
                    </View>
                    <View style={styles.boxF}>
                         <ToiIcon/>
                         <Text style={styles.ket}> 2 Toilet</Text>
                    </View>
                    <View style={styles.boxF}>
                         <CsIcon/>
                         <Text style={styles.ket}> Contact Person 24 Jam</Text>
                    </View>
                    <View style={styles.boxF}>
                         <CpIcon/>
                         <Text style={styles.ket}> Cleaning Service </Text>
                    </View>
                    <View style={styles.boxF}>
                         <AcIcon/>
                         <Text style={styles.ket}>AC Di Setiap Kamar </Text>
                    </View>
                    <View style={styles.boxF}>
                         <BfIcon/>
                         <Text style={styles.ket}>Inlcude Breakfast</Text>
                    </View>
                    <Text style={styles.subtitle}>
                    For More Information
                    </Text>
                    <Text style={styles.des}>
                    Jika anda pertanyaan seputar  Homestay Silahkan hubungi kontak dibawah ini :
                    </Text>
                    <View style={styles.boxF}>
                         <PhoneIcon size={21}/>
                         <Text style={styles.ket}>092364938729</Text>
                    </View>
                    <View style={styles.boxF}>
                         <MailIcon size={21}/>
                         <Text style={styles.ket}>desasosordolok@mail.com</Text>
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
          margin: 18,

     },
     img: {
          width: 'full',
          height: 180
     },
     title:{
          fontSize:24,
          fontWeight:'700'
     },
     des:{
          textAlign:'justify'
     },
     subtitle:{
          fontSize:16,
          fontWeight:'700',
          marginTop:10
     },
     priceBox:{
          display:'flex',
          flexDirection:'row'
     },
     prise:{
          color:'#E13A3A'
     },
     priseR:{
          marginLeft:5
     },
     boxF:{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          marginTop:5

     },
     ket:{
          marginLeft:10
     }

});
