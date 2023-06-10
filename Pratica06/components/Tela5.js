import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Tela5({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, marginBottom:"50%", fontWeight:'bold',color:'#FFF'}}>Tela 5</Text>
      <View style={styles.Navigate}>
        <TouchableOpacity  onPress={() => navigation.goBack()}>
          <Text style={styles.button}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.popToTop()}>
          <Text style={styles.button}>Principal</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.push('Tela6')}>
          <Text style={styles.button}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  Navigate:{
    width:300,
    alignItems:'flex-end',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
  },
  button: {
    fontSize: 24,
    textDecorationLine:'underline',
    color: "#000",
    fontWeight: 'bold',
    padding:7,
    fontWeight:'bold',
    color:'#FFF'
  },
})