import React from 'react'
import HeaderDetailWisata from '../../../components/layout/headerDetailWisata'
import { View,Text,StyleSheet,Image } from 'react-native'
import wisata from '../../../../assets/wisata/wisata.png'
import MapIcon from '../../../components/icon/map'
import JamIcon from '../../../components/icon/jam'
export default function DetailWisata({navigation}) {
  return (
   <View style={style.container}>
          <HeaderDetailWisata navigation={navigation}/>
          <Image source={wisata} style={style.img}/>
          <View style={style.content}>
               <View style={style.contentType}>
                    <Text style={style.title}>
                    Bukit Holbung
                    </Text>
                    <View style={style.categoriBg}>
                         <Text style={style.category}>
                              Nature
                         </Text>
                    </View>
                    <View style={style.locationBox}>
                         <MapIcon size={21}/>
                         <Text style={style.txtLocation}>
                         Jalan Balige Silalahi No.5, Balige, Kabupaten Toba Samosir, Sumatera Utara, Indonesia.
                         </Text>
                    </View>
                    <View style={style.timeBox}>
                         <JamIcon size={21}/>
                         <Text style={style.txtTime}>
                         Buka Setiap hari, Pukul : 08:00:00 - 16:00:00 WIB
                         </Text>
                    </View>
                    <Text style={style.deskripsi}>
                    Desa Tanjung Bunga adalah salah satu Desa yang sangat strategis di Kecamatan Pangururan karena berbatasan dengan Kecamatan Sianjur Mula-mula dan memiliki banyak Potensi khususnya Objek Wisata salah satunya adalah sebagai jalur pendakian Gunung Pusuk Buhit...
                    </Text>
               </View>
          </View>
   </View>

  )
}

const style = StyleSheet.create({
     container:{
          flex:1,
          flexDirection:'column',
          backgroundColor:'#ffffff'

     },
     content:{
          margin:10,
          flexDirection:'column',
          justifyContent:'center',
     },
     img:{
          width:'full',
          height:203,
     },
     title:{
          fontSize:17,
          fontWeight:'bold'
     },
     categoriBg:{
          backgroundColor:"#F98125",
          width:60,
          borderRadius:3,
          marginTop:10
     },
     category:{
          color:'#ffffff',
          padding:3,
          textAlign:'center'
     },
     locationBox:{
          display:'flex',
          flexDirection:'row',
          marginTop:10
     },
     txtLocation:{
          fontSize:11,
          color:'#333333',
          fontWeight:'500',
          marginLeft:5
     },
     timeBox:{
          display:'flex',
          flexDirection:'row', 
          alignItems:'center',
          marginTop:10
     },
     txtTime:{
          fontSize:11,
          color:'#333333',
          fontWeight:'500',
          marginLeft:5
     },
     deskripsi:{
          fontSize:12,
          textAlign:'justify',
          marginTop:10
     }
     
     
})
