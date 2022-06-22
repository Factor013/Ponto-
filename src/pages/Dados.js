import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function App({route}) {



  return (
    <View style={styles.container}>
      <Text>Trabalhador: {route.params?.Trabalhador}</Text>
      <Text>Dados: {route.params?.Hora}</Text>
      <StatusBar style="auto" />
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
});