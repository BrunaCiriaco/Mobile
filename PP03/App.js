import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botao from './src/Botao'

export default function App() {
  return (
    <View style={styles.container}>
      <Botao style={styles.a}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#AC9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  a:{
    color:'red'
  }
});
