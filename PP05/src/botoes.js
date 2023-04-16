import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native';
export default createBotoes = () => {
    var arrays= [ 'A', 'B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var letras =[]

    arrays.forEach((element) => {
        letras.push(<Text  style = {styles.letras}>{element}</Text>)           
    });

    return(
        <View style={styles.container}>
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('a - A (á)') }>
             {letras[0]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('b - B (bê)') }>
             {letras[1]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('c - C (cê)') }>
             {letras[2]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('d - D (dê)') }>
             {letras[3]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('e - E (é)') }>
             {letras[4]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('f - F (éfe)') }>
             {letras[5]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('g - G (gê)') }>
             {letras[6]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('h - H (agá)') }>
             {letras[7]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('i - I (i)') }>
             {letras[8]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('j - J (jóta)') }>
             {letras[9]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('k - K (cá)') }>
             {letras[10]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('l - L (éle)') }>
             {letras[11]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('m - M (ême)') }>
             {letras[12]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('n - N (êne)') }>
             {letras[13]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('o - O (ó)') }>
             {letras[14]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('p - P (pê)') }>
             {letras[15]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('q - Q (quê)') }>
             {letras[16]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('r - R (érre)') }>
             {letras[17]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('s - S (ésse)') }>
             {letras[18]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('t -T (tê)') }>
             {letras[19]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('u - U (u)') }>
             {letras[20]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('v -V (vê)') }>
             {letras[21]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('w - W (dáblio)') }>
             {letras[22]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('x - X (xis)') }>
             {letras[23]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('y - Y (ípsilon)') }>
             {letras[24]} 
          </TouchableOpacity> 
          <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('z - Z (zê)') }>
             {letras[25] } 
          </TouchableOpacity>        
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
       flexWrap:'wrap',
       width:400,
       height:250
    },
    botao:{
        margin:9.5,
        alignItems:'center',
        backgroundColor:'#B0E0E6',
        borderRadius:30,
        width:40,
        height:40,
        borderColor: 'black',
        borderWidth:1,
        shadowOffset: {
         width: 0,
         height: 9,
      },
      shadowOpacity: 0.50,
      shadowRadius: 12.35,
      
      elevation: 10,

    },
    letras:{
        padding:10,
        fontWeight: 'bold'
        
    }
})