import React from 'react'
import HeaderDetailMakanan from '../../../components/layout/headerDetailMakanan'
import { View,Text,StyleSheet,Image } from 'react-native'
import MapIcon from '../../../components/icon/map'
import makanan from '../../../../assets/umkm/makanan/makanan.png'
import WaIcon from '../../../components/icon/waIcon'
export default function DetailMakanan({navigation}) {
  return (
   <View style={style.container}>
          <HeaderDetailMakanan navigation={navigation}/>
          <Image source={makanan} style={style.img}/>
          <View style={style.content}>
               <View style={style.contentType}>
                    <Text style={style.title}>
                    IDR 120.000
                    </Text>
                    <Text style={{fontWeight:"800"}}>Keripik Pisang Mak Chyntia</Text>
                    <View style={style.locationBox}>
                         <MapIcon size={21}/>
                         <Text style={style.txtLocation}>
                         Sosor Dolok
                         </Text>
                    </View>
                   <Text style={{fontWeight:"800"}}>Deskripsi</Text>
                    <Text style={style.deskripsi}>
                    Krispi nya pisang goreng gak bikin tersedak. Cocok untuk teman kopi. Rasa lezatnya ngga pernah bikin bosan, karena memang rasanya yang khas. Nggak cuma buat camilan teman minum teh bareng keluarga, keripik pisang yang satu ini sering jadi buah tangan, oleh-oleh, juga hidangan menyuguh tamu di rumah. 
                   </Text>
                   <View style={style.contact}> 
                    <WaIcon/>
                    <Text style={{marginLeft:5,color:'#ffffff'}}>
                         Pesan Sekarang
                    </Text>
                   </View>
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
          fontWeight:'bold',
          color:'#E13A3A'
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
          marginTop:10,
          alignItems:'center'
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
    
     deskripsi:{
          fontSize:12,
          textAlign:'justify',
          marginTop:5
     },
     contact:{
          backgroundColor:'#4AC959',
          display:'flex',
          flexDirection:'row',
          padding:6,
          borderRadius:7,
          width:139
     }
     
     
})
