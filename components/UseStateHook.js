import React, {useState} from 'react';
import {Text,View, Button, StyleSheet} from 'react-native';

export default function FirstHook(prop){

    const [isData, setIsData] = useState(false);

    return(
        <View style={styles.container}>
            <Text styles={styles.text}>Hi, it's {prop.userName} and my skill is {isData?"Design":"Development"}</Text>
            <Button style={styles.button}
                title={isData?'Skill Changed!!':'Change Skill'}
                disabled={isData}
                onPress={()=>{
                    setIsData(!isData)
                }}/>
        </View>
    );
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    text:{
        fontSize:14,
        color:'#ffffff',
        fontWeight:'bold'
    },
    button:{
        backgroundColor:'#804040',
        fontSize:14,
        color:'#ffffff',
        height:40,
        width:'auto',
        margin:10
    }
});
