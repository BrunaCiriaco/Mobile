import React, { useState } from 'react';
import { Text, View, Button, StyleSheet,TouchableOpacity } from 'react-native';

const Inputs = () => {
    const [pula25, setPula25] = useState(0);
    const [pula2, setPula2] = useState(2);
    
    
  return (
    <View style={styles.container} >  
        <Text style={{ fontSize: 40, textAlign:'center'}}> {pula25} </Text>
        <Button
          title=" + "
          onPress={() => setPula25(pula25 + 25)}
          color='#20B2AA'
        />
        <Button
          title=" - "
          onPress={() => setPula25(pula25 - 25)}
        />
 

        <Text style={{ fontSize: 40, textAlign:'center' }}> {pula2} </Text>
        <Button
          title=" + "
          onPress={() => setPula2((pula2 * 2))}
          color='#20B2AA'
        />
        <Button
          title=" - "
          onPress={() => setPula2(pula2 / 2)}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        borderColor:'Black',
        borderWidth: 5,
        padding:20,
        margin:20
    }, 
    botao:{
        flex:1,
        backgroundColor:'#20B2AA',
    }
})

export default Inputs;