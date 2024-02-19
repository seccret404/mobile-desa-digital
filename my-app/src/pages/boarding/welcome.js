import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

export default function Welcome() {
  return (
    <View style={style.bg} >
     <Text style={style.text}>
          edward
     </Text>
    </View>
  )
}

const style = StyleSheet.create({
     text:{
          color:"#111111",
     },
     bg:{
          backgroundColor:'#B12828',
     }
})
