import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import HeaderPenduduk from "../../components/layout/headerPenduduk";
import DusunIcon from "../../components/icon/dusun";
export default function Penduduk({navigation}) {
     const goDusun = () =>{
          navigation.navigate('detail-dusun')
     }
     const goPenduduk = () =>{
          navigation.navigate('detail-penduduk')
     }
     return (
          <View style={styles.container}>
               <HeaderPenduduk navigation={navigation} />
               <Image source={require('../../../assets/penduduk.png')} />
               <View style={styles.content}>
                    <Text style={styles.bigTitle}>Statistik Data Penduduk Desa Sosor Dolok</Text>
                    <ScrollView>
                         <TouchableOpacity onPress={goDusun}>
                         <View style={styles.boxDusun}>
                              <View style={styles.bgDusun}>
                                   <DusunIcon size={36} />
                              </View>
                              <Text style={styles.namaDusun}>
                                   Dusun 1
                              </Text>
                         </View>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={goPenduduk}>
                         <View style={styles.boxDusun}>
                              <View style={styles.bgDusun}>
                                   <DusunIcon size={36} />
                              </View>
                              <Text style={styles.namaDusun}>
                                   Data Penduduk Desa
                              </Text>
                         </View>
                         </TouchableOpacity>
                    </ScrollView>

               </View>
          </View>
     )
}



const styles = StyleSheet.create({
     container: {
          flex: 1,
          flexDirection: 'column',
     },
     content: {
          marginLeft: 22,
          marginRight: 22,
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
     },
     bigTitle: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          textAlign: "center",
          marginTop: -50,
          fontSize: 15,
          color: '#ffffff',
          fontWeight: '700',
          marginBottom: 20
     },
     bgDusun: {
          backgroundColor: '#427DD6',
          padding: 15,
          borderRadius:37
     },
     boxDusun: {
          flex:1,
          display: "flex",
          flexDirection: 'row',
          marginTop: 20,
          alignItems:'center',
          borderRadius:37,
          borderColor:'#427DD6',
          borderWidth:3
     },
     namaDusun:{
          marginLeft:20,
          fontSize:18
     }

})