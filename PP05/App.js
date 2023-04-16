import React from 'react'
import { StyleSheet,  View, } from 'react-native';
import CreateBotoes from "./src/botoes"

export default function App() {
  return (
    <View style={styles.container}>
      <CreateBotoes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
