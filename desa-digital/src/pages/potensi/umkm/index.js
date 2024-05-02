import React from 'react'
import HeaderUMKM from '../../../components/layout/headerumkm'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import Footer from '../../../components/layout/footer'
export default function UMKM() {
  return (
    <View style={style.container}>
          <HeaderUMKM/>
          <View style={style.content}>

          </View>
          <Footer/>
    </View>
  )
}


const style = StyleSheet.create({
     container:{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
     },
     conten:{
          flex:1
     }
})