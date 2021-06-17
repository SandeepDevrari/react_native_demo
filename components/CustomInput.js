import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

export default function Translator(emoji){
  const [text, setText] = useState("")
  return (
    <View>
    <TextInput 
      style={styles.input}
      placeholder="Enter text here"
      onChangeText={(text)=>{
        setText(text)
      }}
      defaultValue={text}
      multiline
      keyboardType='name-phone-pad'
    />
    <Text style={styles.text}>
      {text.split(" ").map((word) => word && emoji.data).join(" ")}
    </Text>
    </View>
  );
}

const styles= StyleSheet.create({
  input:{
      margin:10,
      padding:10,
      fontSize:16,
      textAlign:'center',
      borderColor:'black',
      borderRadius:5,
      borderWidth:2,
      color:'red',
      fontStyle:'bold'
  },
  text:{
    fontSize:18,
    padding:8,
  }
})