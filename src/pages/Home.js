import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function App() {
  const [date, setDate] = useState(new Date().toLocaleTimeString())

  function Clock(){
    setDate(new Date().toLocaleTimeString())
  }
  useEffect(() => {
    setTimeout(()=>{
        Clock()
    },1000)
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerMsg}>
      <Text style={styles.clock}>{date}</Text>
      </View>
      <View style={styles.containerPonto}>
      <TouchableOpacity style={styles.button} onPress={()=>Alert.alert(date)}>
        <Text>
          Bater o Ponto
        </Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#454545',
    alignItems: 'center',
    justifyContent:'space-around'
  },
  button:{
    borderRadius:60,
    justifyContent:'center',
    alignItems: 'center',
    width:90,
    height:150,
    backgroundColor:'#00FA8F',
  },
  containerPonto: {
    flex:1,
    alignItems: 'center',
    justifyContent:'flex-end',
    paddingBottom:90,
  },
  containerMsg: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  clock: {
    fontWeight:'bold',  
    backgroundColor:'grey',
    padding:10,
    borderRadius:20,
    fontSize: 50,
    color: '#000',
    marginTop: 50,
  },

});