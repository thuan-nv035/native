import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import 'react-native-gesture-handler'
export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bg.jpg')}></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})