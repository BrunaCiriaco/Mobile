import React from "react";
import { Text, Image, View, StyleSheet } from 'react-native';
const logo = () =>{
    return(
    <View>
        <Image
            source={{uri:'https://d3q79ipuvy7qd5.cloudfront.net/entities/7a50ca64d331415e190841610e353849/0a9d0927d67965a0db42efd92eb8b78c092b9a317c0f0abda8f10ac1987e8c52.png'}}
            style={{width: 200, height:200}}
        />
    </View>
    )   
}

export default logo;