import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

//import custom components
// import FirstHook from './components/UseStateHook'
// import Translator from './components/CustomInput'

export default function App() {

  const [data, setData] = useState([
    {name:"A", id:1},
    {name:"B", id:2},
    {name:"C", id:3},
    {name:"D", id:4},
    {name:"E", id:5},
    {name:"F", id:6},
    {name:"G", id:7},
    {name:"H", id:8},
    {name:"I", id:9},
    {name:"J", id:10}
  ])

  const filterData= (item)=>{
    setData((preData)=>{
      return preData.filter(d=> d.id!=item.id)
    })
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item)=>{
          return(
            item.id
          );
        }}
        numColumns={4}
        data={data}
        renderItem={({item})=>{
          return(
            <TouchableOpacity
              onPress={()=>{
                filterData(item)
              }}>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    paddingHorizontal:20,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    padding:20,
    margin:20,
    backgroundColor:'skyblue',
    fontSize:16,
    fontWeight:'bold',
  },input:{
    margin:10,
    padding:4,
    fontSize:16,
    textAlign:'center',
    borderColor:'red',
    color:'red',
    fontStyle:'bold'
  }
});
