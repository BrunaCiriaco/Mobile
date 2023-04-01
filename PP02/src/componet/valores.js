import React, {useState} from "react";
import { Text, View, TextInput, StyleSheet} from "react-native";

export default () => {
  const [valMin, newMin] = useState('');
  const [valMax, newMax] = useState('');
  const t = () => {
    return  Math.floor(Math.random() * (valMax - valMin) + valMin)
  }

  return(
    <View style ={{width:400}} >
      <TextInput
        style={styles.max}
        placeholder="Valor Maximo"
        onChangeText={newText => newMax(newText)}
        defaultValue={valMax}
      />
       <TextInput
        style={styles.min}
        placeholder="Valor Minimo"
        onChangeText={newText => newMin(newText)}
        defaultValue={valMin}
      />
     <Text style={{textAlign:'center' ,fontSize: 20}}>
        {t()}, {t()} , {t()} , {t()} , {t()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  max:{
    borderColor:'red',
    borderWidth:2,
    padding:10,
    fontSize:20,
    borderRadius:20,
    height:60,
    margin:10
  },
  min:{
    borderColor:'#9ACD32',
    borderWidth:2,
    padding:10,
    fontSize:20,
    borderRadius:20,
    height:60,
    margin:10
  }
})