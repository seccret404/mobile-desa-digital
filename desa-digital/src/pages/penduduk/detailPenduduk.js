import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import HeaderPenduduk from "../../components/layout/headerPenduduk";
import DoughnutChart from "../../components/ui/diagram";

export default function PendudukDetail(navigation) {
     const data = [
          { color: '#D6AC42', percentage: 50 },
          { color: '#9A701F', percentage: 50 },

     ];
     return (
          <View style={styles.container}>
               <HeaderPenduduk navigation={navigation} />
               <View style={styles.content}>
                    <Text style={styles.bigTitle}>Data Penduduk Desa Sosor Dolok</Text>
                    <ScrollView>
                         <View style={styles.boxJK}>
                              <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: '600' }}>Jenis Kelamin</Text>
                           
                                   <View style={styles.border}>
                                        <View style={{flex:1,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                        <DoughnutChart data={data} />
                                        </View>
                                        <View style={styles.boxInfo}>
                                             <View style={styles.kotak}></View>
                                             <Text style={{ marginLeft: 5, color: '#ffffff' }}>Laki-laki</Text>
                                        </View>
                                        <View style={styles.boxInfo}>
                                             <View style={styles.kotak2}></View>
                                             <Text style={{ marginLeft: 5, color: '#ffffff' }}>Perempuan</Text>
                                        </View>
                                        {/* view 1 */}
                                        <View style={{ flexDirection: 'row', flex: 1, borderRadius:10,marginTop:10 }}>
                                             <View style={{ flex: 1, backgroundColor: '#FFD700',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>Laki-laki</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{padding:5,textAlign:'center'}}>sdg</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#E6E6FA',borderTopRightRadius:5,borderBottomRightRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>sdg</Text></View>
                                        </View>
                                        {/* view 2 */}
                                        <View style={{ flexDirection: 'row', flex: 1, borderRadius:10,marginTop:10 }}>
                                             <View style={{ flex: 1, backgroundColor: '#FFD700',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>Perempuan</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{padding:5,textAlign:'center'}}>sdg</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#E6E6FA',borderTopRightRadius:5,borderBottomRightRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>sdg</Text></View>
                                        </View>
                                        {/* view 3 */}
                                        <View style={{ flexDirection: 'row', flex: 1, borderRadius:10,marginTop:10 }}>
                                             <View style={{ flex: 1, backgroundColor: '#FFD700',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>Total</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{padding:5,textAlign:'center'}}>sdg</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#E6E6FA',borderTopRightRadius:5,borderBottomRightRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>sdg</Text></View>
                                        </View>
                                   </View>

                             
                         </View>
                         <View style={styles.boxJK}>
                              <Text style={{ fontSize: 18, color: '#ffffff', fontWeight: '600' }}>Kewarganegaraan</Text>
                           
                                   <View style={styles.border}>
                                        <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                                        <DoughnutChart data={data} />
                                        </View>
                                        <View style={styles.boxInfo}>
                                             <View style={styles.kotak}></View>
                                             <Text style={{ marginLeft: 5, color: '#ffffff' }}>Warga negara indonesia</Text>
                                        </View>
                                        <View style={styles.boxInfo}>
                                             <View style={styles.kotak2}></View>
                                             <Text style={{ marginLeft: 5, color: '#ffffff' }}>Warga negara asing</Text>
                                        </View>
                                        {/* view 1 */}
                                        <View style={{ flexDirection: 'row', flex: 1, borderRadius:10,marginTop:10 }}>
                                             <View style={{ flex: 1, backgroundColor: '#FFD700',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>WNI</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{padding:5,textAlign:'center'}}>sdg</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#E6E6FA',borderTopRightRadius:5,borderBottomRightRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>sdg</Text></View>
                                        </View>
                                        {/* view 2 */}
                                        <View style={{ flexDirection: 'row', flex: 1, borderRadius:10,marginTop:10 }}>
                                             <View style={{ flex: 1, backgroundColor: '#FFD700',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>WNA</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{padding:5,textAlign:'center'}}>sdg</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#E6E6FA',borderTopRightRadius:5,borderBottomRightRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>sdg</Text></View>
                                        </View>
                                        {/* view 3 */}
                                        <View style={{ flexDirection: 'row', flex: 1, borderRadius:10,marginTop:10 }}>
                                             <View style={{ flex: 1, backgroundColor: '#FFD700',borderTopLeftRadius:5,borderBottomLeftRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>Total</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#FFFACD' }} ><Text style={{padding:5,textAlign:'center'}}>sdg</Text></View>
                                             <View style={{ flex: 1, backgroundColor: '#E6E6FA',borderTopRightRadius:5,borderBottomRightRadius:5 }} ><Text style={{padding:5,textAlign:'center'}}>sdg</Text></View>
                                        </View>
                                   </View>

                             
                         </View>
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginBottom:100
     },
     bigTitle: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          textAlign: "center",
          fontSize: 15,
          color: '#481111',
          fontWeight: '700',
          marginBottom: 20,
          marginTop:10
     },
     boxJK: {
          backgroundColor: '#0369A1',
          padding:8,
          borderRadius:5,
          marginTop:10,
          paddingBottom:10
     },
     kotak: {
          backgroundColor: '#9A701F',
          width: 20,
          height: 20
     },
     kotak2: {
          backgroundColor: '#D6AC42',
          width: 20,
          height: 20
     },
     boxInfo: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10

     },
     border:{
          borderWidth:1,
          borderColor:'#ffffff',
          padding:20
     },
     info:{
          width:1/3
     }
})