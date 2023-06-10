import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Principal({navigation}) {

  return (
    <View style={styles.container}>

      <Text style={{fontSize:30}}>Principal</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Tela1')}>
        <Text style={styles.button}>Tela1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tela2')}>
        <Text style={styles.button}>Tela2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tela3')}>
        <Text style={styles.button}>Tela3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tela4')}>
        <Text style={styles.button}>Tela4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tela5')}>
        <Text style={styles.button}>Tela5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tela6')}>
        <Text style={styles.button}>Tela6</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tela7')}>
        <Text style={styles.button}>Tela7</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    fontSize:20,
    margin:10,
    color:"#000",
    fontWeight:'bold',
    textDecorationLine:'underline',
  },
})