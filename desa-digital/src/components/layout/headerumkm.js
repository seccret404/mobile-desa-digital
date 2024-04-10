import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function HeaderUMKM({ navigation }) {
     const navigateUMKM = () => {
          navigation.navigate('home');
     };
     return (
          <View style={styles.header}>
               <View style={styles.logo}>
                    <TouchableOpacity onPress={navigateUMKM}>
                         <FontAwesome name='arrow-left' size={24} color='#ffffff' />
                    </TouchableOpacity>
               </View>
               <View>
                    <Text style={styles.title}>
                         Produk UMKM
                    </Text>
               </View>
               <View>
                    <TouchableOpacity>
                         <FontAwesome name='bell' size={24} color='white' />
                    </TouchableOpacity>
               </View>

          </View>
     )
}

const styles = StyleSheet.create({
     header: {
          backgroundColor: '#0890EA',
          flexDirection: 'row',
          paddingVertical: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft:20,
          paddingRight:20

     },
     title: {
          fontSize: 20,
          color: '#ffffff',

     },
   

})
