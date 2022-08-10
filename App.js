import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import RootComponent from "./src/views/index";
export default function App() {
  return (
    <View>
      {/* <StatusBar style="auto" /> */}
      <RootComponent></RootComponent>
    </View>

    // <TailwindProvider>
    //     <View className="flex-1 items-center justify-center bg-white">
    //         <Text className="text-red-500">Open up App.js to start working on your app!</Text>
    //     </View>
    // </TailwindProvider>
  );
}
