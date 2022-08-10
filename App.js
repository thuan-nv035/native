import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  // const [count, setCount] = useState(0);
  // const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    // <TailwindProvider>
    //   <View className="flex-1 items-center justify-center bg-white">
    //     <Text className="text-red-500">
    //       Open up App.js to start working on your app!
    //     </Text>
    //     <StatusBar style="auto" />
    //     <View>
    //       <Text>count: {count}</Text>
    //     </View>
    //     <TouchableOpacity onPress={onPress} >
    //       <Text className="text-red-500 font-bold px-4 py-2 shadow-sm">Click here</Text>
    //     </TouchableOpacity>
    //   </View>
    // </TailwindProvider>
    <NavigationContainer>
      <View></View>
    </NavigationContainer>
  );
}
