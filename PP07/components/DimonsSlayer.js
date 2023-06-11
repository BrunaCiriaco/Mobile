import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default comp => (
  <View style={styles.container}>
    <Image
       source={{uri:'https://64.media.tumblr.com/268d3e39cb36a983f23640b59cabbeb2/da41f70c382042ac-38/s1280x1920/49d4fc61d73d54c1b0e4f8085539d269b536ce49.jpg'}}
      style={styles.image}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height:'100%'
  },
});
