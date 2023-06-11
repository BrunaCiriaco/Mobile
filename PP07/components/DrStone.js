import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default comp => (
  <View style={styles.container}>
    <Image
       source={{uri:'https://static.wikia.nocookie.net/dr-stone/images/3/31/Dr._Stone_%28Anime%29_promocional.jpg/revision/latest?cb=20200427222033&path-prefix=es'}}
       style={styles.image}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "100%",
  },
});
