import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function HeaderIbadah({ navigation }) {
     const navigateHome = () => {
          navigation.navigate('fasilitas');
     };
     return (
          <View style={styles.header}>
               <View style={styles.logo}>
                    <TouchableOpacity onPress={navigateHome}>
                         <FontAwesome name='arrow-left' size={24} color='#ffffff' />
                    </TouchableOpacity>
               </View>
               <View>
                    <Text style={styles.title}>
                         Rumah Ibadah
                    </Text>
               </View>

          </View>
     )
}

const styles = StyleSheet.create({
     header: {
          backgroundColor: '#0369A1',
          flexDirection: 'row',
          paddingVertical: 20,
          alignItems: 'center',
          justifyContent: 'center'
     },
     title: {
          fontSize: 20,
          color: '#ffffff',
     },
     logo: {
          left: 0,
          position: 'absolute',
          paddingLeft: 20,
          justifyContent: 'center'
     }

})
