import React,{useState} from "react";
import { View, Text, TextInput, StyleSheet,ScrollView,FlatList, TouchableOpacity, Image } from "react-native";
import HeaderOrganisasi from "../../components/layout/headerorganisasi";
import { FontAwesome } from '@expo/vector-icons';



export default function Organisasi({ navigation }) {
     const [numColumns, setNumColumns] = useState(2);

     const listOrganisasi = [
          {id:'1', image: require('../../../assets/organisasi/ki.png'), namaOrganisasi:'Kelompok Tani', detailUrl:'organisasi-detail'},
          {id:'2', image: require('../../../assets/organisasi/kt.png'), namaOrganisasi:'Karang Taruna',detailUrl:''},
          {id:'3', image: require('../../../assets/organisasi/pkk.png'), namaOrganisasi:'Pemberdayaan Kesejahteraan Keluarga',detailUrl:''},
          {id:'3', image: require('../../../assets/organisasi/pkk.png'), namaOrganisasi:'Pemberdayaan Kesejahteraan Keluarga',detailUrl:''},
     ];

     const handleMenu = (detailUrl) =>{
          navigation.navigate(detailUrl);
     };

     const renderList = ({item}) =>(
               <TouchableOpacity style={styles.menuItem} onPress={() => handleMenu(item.detailUrl)}>
                    <View style={styles.menuItemContent} >
                         <Image source={item.image} style={styles.img}/>
                         <Text style={{textAlign:'center',fontSize:13,fontWeight:'700',marginTop:5,marginBottom:18}}>{item.namaOrganisasi}</Text>
                    </View>
               </TouchableOpacity>
     )
     return (
          <View style={styles.container}>
               <HeaderOrganisasi navigation={navigation} />
               
               <View style={styles.content}>
                    <View style={styles.boxSearch}>
                         <TextInput placeholder='Cari' style={styles.textInput} />
                         <FontAwesome name='search' size={18} color='grey' style={styles.search} />
                    </View>
                    <ScrollView>
                         <View>
                              <FlatList
                              data={listOrganisasi}
                              renderItem={renderList}
                              numColumns={numColumns}
                              />
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
          justifyContent: 'space-between',
          backgroundColor: '#ffffff'
     },
     content: {
          flex: 1,
          marginBottom: 10
     },
     textInput: {
          borderColor: '#111111',
          borderWidth: 0.5,
          height: 40,
          borderRadius: 30,
          width: '100%',
          padding: 8
     },
     boxSearch: {
          flexDirection: 'row',
          paddingLeft: 16,
          paddingRight: 16,
          marginTop: 15, marginBottom:5
     },
     search: {
          position: 'absolute',
          right: 25,
          top: 10
     },
     menuItemContent: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
          padding:5
     },
     menuItem: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10,
          backgroundColor:'#ffffff',
          borderRadius:5,
          elevation:2
     },
     img:{
          width:130,
          height:130
     }
})