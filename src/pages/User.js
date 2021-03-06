import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {

    const navigation = useNavigation();
    const[user,setUser]=useState("")

    function setTrabalhador(){
      navigation.navigate("Home",{Trabalhador: user})
    }


  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Text style={styles.label}>Digite seu nome aqui:</Text>
      <TextInput style={styles.text} placeholder='Usuário' value={user} onChangeText={text=>setUser(text)} onEndEditing={setTrabalhador}></TextInput>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems:'center',
    justifyContent: 'center',
  },
  container2: {
    alignItems:'baseline',
    justifyContent: 'center',
  },
  text: {
    padding:5,
    width:300,
    height:35,
    backgroundColor: '#ccc',
  },
  label:{
    color:'#ddd'
  },
});
