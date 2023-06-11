import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default comp => (
  <View style={styles.container}>
    <Image
       source={{uri:'https://collorsbrasil.com.br/wp-content/uploads/2021/10/rick-e-morty.jpg'}}
      style={styles.image}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height:'100%',
  },
});
