import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

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
  return (
    <View style={styles.container}>
      <ScrollView>
      {
        data.map((item)=>{
          return(
            <View key={item.id}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        })
      }
      </ScrollView>
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
