import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from "react-native";

import RickAndMorty from "./RickAndMorty";
import PanteraNegra from "./PanteraNegra";
import DimonsSlayer from "./DimonsSlayer";
import TheSimpsons from "./TheSimpsons";
import DrStone from "./DrStone";

const Principal = createBottomTabNavigator();

export default comp => (
  
    <Principal.Navigator>
      <Principal.Screen name='Rick and Morty ' component={RickAndMorty}
         options={{
            tabBarIcon: ( ) => (
              <Image
                source={require('../assets/Imagens/iconsRick.png')}
                style={{width:25, height:25}}
              />
            ),
          }}
        />
    <Principal.Screen name='Pantera Negra ' component={PanteraNegra}
         options={{
            tabBarIcon: ( ) => (
              <Image
                source={require('../assets/Imagens/iconsPantera.png')}
                style={{width:25, height:25}}
              />
            ),
          }}
        />
      <Principal.Screen name='Dimons Slayer' component={DimonsSlayer}
         options={{
            tabBarIcon: ( ) => (
              <Image
                source={require('../assets/Imagens/iconsTanjiro.png')}
                style={{width:25, height:25}}
              />
            ),
          }}
        />
       <Principal.Screen name='Os Simpsons' component={TheSimpsons}
         options={{
            tabBarIcon: ( ) => (
              <Image
                source={require('../assets/Imagens/iconsHomer.png')}
                style={{width:25, height:25}}
              />
            ),
          }}
        />
        <Principal.Screen name='Dr.Stone' component={DrStone}
         options={{
            tabBarIcon: ( ) => (
              <Image
                source={require('../assets/Imagens/iconsStone.png')}
                style={{width:25, height:25}}
              />
            ),
          }}
        />
    </Principal.Navigator>
  );
