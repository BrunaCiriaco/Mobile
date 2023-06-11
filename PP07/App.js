import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Principal from './components/Principal';


export default () => (
  <NavigationContainer>
    <SafeAreaView style={{flex: 1}}>
      <Principal />
    </SafeAreaView>
  </NavigationContainer>
)