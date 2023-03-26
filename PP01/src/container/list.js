import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';

const list = () =>{
    const [text, onChangeText] = React.useState('Nome do Aluno:  ');
  
    return(
      <SafeAreaView style = {styles.list}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Text style={{padding: 10, fontSize: 15}}>
        {text
          .split(' ')
          .map(text => text || '')
          .join(' ')}
      </Text>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    input:{
      height:40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    list:{
        backgroundColor:'#d0dcd7',
        padding:20,
        borderRadius:10,
        margin:10
    }
  })
  
  export default list;