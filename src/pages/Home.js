import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {

  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerMsg}>
        <Text >  </Text>
      </View>
      <View style={styles.containerPonto}>
      <TouchableOpacity style={styles.button} onPress={()=>Alert.alert(currentDate)}>
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
});