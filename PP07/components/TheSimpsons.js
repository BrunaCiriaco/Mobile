import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default comp => (
  <View style={styles.container}>
    <Image
      source={{uri:'https://s2-g1.glbimg.com/Sgt2CI82plGJ9J2KVEmmMS9czbo=/0x0:300x400/600x0/smart/filters:gifv():strip_icc()/s.glbimg.com/jo/g1/f/original/2012/04/11/simpsons2.jpg'}}
      style={styles.image}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "98%",
  },
});
