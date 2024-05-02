import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Footer({ navigation }) {
     const GoHome = () => {
          navigation.navigate('home')
     }
     const GoProfilDesa = () => {
          navigation.navigate('profildesa')
     }
     const GoPotensi = () =>{
          navigation.navigate('potensi')
     }
     const GoWisata = () =>{
          navigation.navigate('wisata');
     }
     return (
          <View style={styles.Container}>
               <TouchableOpacity onPress={GoHome}>
                    <View style={styles.menuContainer}>
                         <FontAwesome name="home" size={24} color="#B3B9C6" />
                         <Text style={styles.captionMenu}>
                              Beranda
                         </Text>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={GoWisata}>
                    <View style={styles.menuContainer}>
                         <FontAwesome name='image' size={24} color='#B3B9C6' />
                         <Text style={styles.captionMenu}>
                              Objek Wisata
                         </Text>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={GoHome}>
                    <View style={styles.menuContainer}>
                         <FontAwesome name='road' size={24} color='#B3B9C6' />
                         <Text style={styles.captionMenu}>
                              Fasilitas
                         </Text>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.menuContainer}>
                         <FontAwesome name='tag' size={24} color="#B3B9C6" />
                         <Text style={styles.captionMenu}>
                              UMKM
                         </Text>
                    </View>
               </TouchableOpacity>
               <TouchableOpacity>
                    <View style={styles.menuContainer}>
                         <FontAwesome name='map' size={24} color="#B3B9C6" />
                         <Text style={styles.captionMenu}>
                              Profil Desa
                         </Text>
                    </View>
               </TouchableOpacity>

          </View>
     );
}

const styles = StyleSheet.create({
     Container: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: '#ffffff'
     },
     menuContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10
     },
     captionMenu: {
          fontSize: 11,
          color: '#667085'
     }
});
