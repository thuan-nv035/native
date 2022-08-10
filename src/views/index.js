import { View, Text } from "react-native";
import React from "react";
import Login from "./login";
import Home from "./home";
import Settings from "./setting";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const RootComponent = () => {
  return (
     
      // <NavigationContainer>
      //   <Stack.Navigator >
      //     <Stack.Screen name="Login" component={Login} />
      //     <Stack.Screen name="Home" component={Home} />
      //     <Stack.Screen name="Settings" component={Settings} />
      //   </Stack.Navigator>  
      // </NavigationContainer>
      <View>
        <Login/>
      </View>
  );
};

export default RootComponent;
