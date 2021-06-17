import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

//import custom components
import FirstHook from './components/UseStateHook'
import Translator from './components/CustomInput'

export default function App() {

  const [emo, setEmo] = useState('🍕')
  return (
    <View style={styles.container}>
      {/* <FirstHook userName='XYZ'/> */}
      <TextInput
      style={styles.input}
      placeholder="enter emoji here"
      defaultValue={emo}
      onChangeText={(t)=>{
        setEmo(t)
      }}/>
        <Translator data={emo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
