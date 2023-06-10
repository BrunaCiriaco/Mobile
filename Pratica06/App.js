import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Principal from "./components/Principal";
import Tela1 from "./components/Tela1";
import Tela2 from "./components/Tela2";
import Tela3 from "./components/Tela3";
import Tela4 from "./components/Tela4";
import Tela5 from "./components/Tela5";
import Tela6 from "./components/Tela6";
import Tela7 from "./components/Tela7";


const { Screen, Navigator } = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator initialRouteName="Principal" screenOptions={{headerShown:false}}>
          <Screen
            name="Principal"
            component={Principal}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="Tela1"
            component={Tela1}
          />
          <Screen
            name="Tela2"
            component={Tela2}
          />
          <Screen
            name="Tela3"
            component={Tela3}
          />
          <Screen
            name="Tela4"
            component={Tela4}
          />
          <Screen
            name="Tela5"
            component={Tela5}
          />
          <Screen
            name="Tela6"
            component={Tela6}
          />
          <Screen
            name="Tela7"
            component={Tela7}
          />
        </Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});