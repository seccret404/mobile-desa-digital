import React from 'react'
import HeaderDetailWisata from '../../../components/layout/headerDetailWisata'
import { View,Text,StyleSheet,Image } from 'react-native'
import ibadah from '../../../../assets/fasilitas/ib1.png'
import MapIcon from '../../../components/icon/map'
import JamIcon from '../../../components/icon/jam'
export default function DetailIbadah({navigation}) {
  return (
   <View style={style.container}>
          <HeaderDetailWisata navigation={navigation}/>
          <Image source={ibadah} style={style.img}/>
          <View style={style.content}>
               <View style={style.contentType}>
                    <Text style={style.title}>
                    HKI Sosor Dolok
                    </Text>
                    <View style={style.categoriBg}>
                         <Text style={style.category}>
                              Rumah Ibadah
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
                    HKI Wilayah II (Silindung-Pangaribuan) adalah salah satu administratif kewilayahan gerejawi HKI yang berpusat di Tarurung dengan area pelayanan yang meliputi Kabupaten Tapanuli Utara serta area sekitarnya. Pada tahun 2017 terhitung Wilayah II (Silindung-Pangaribuan) memiliki anggota jemaat sebanyak 25.179 jiwa. Resort Sipahutar I merupakan resort yang terbesar dimana jumlah jemaat melebihi dari 2.724 jiwa, Sedangkan Resort Lobu Sikkam merupakan yang terkecil yakni hanya memiliki 812 jiwa jemaat
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
          backgroundColor:"#03A9F4",
          width:110,
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
