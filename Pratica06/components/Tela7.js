import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Tela7({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, marginBottom:"50%", fontWeight:'bold',color:'#FFF'}}>Tela 7</Text>
      <View style={styles.Navigate}>
      <TouchableOpacity  onPress={() => navigation.push('Tela6')}>
          <Text style={styles.button}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.popToTop()}>
          <Text style={styles.button}>Principal</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FBC8F',
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