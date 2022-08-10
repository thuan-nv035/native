import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    Image,
  } from "react-native";
  import React from "react";
  import { TextInput } from "react-native";
  const windowsWidth = Dimensions.get("window").width;
  const windowsHeight = Dimensions.get("window").height;
  import { AntDesign } from "@expo/vector-icons";
  const Settings = () => {
    return (
      <View style={{ height: "100%", width: "100%", marginTop: 40, padding: 5 }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AntDesign name="left" size={24} color="black" />
            <Text style={{ fontSize: 20 }}>Back</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: "20%",
            width: "100%",
            marginTop: 0.15 * windowsHeight,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "60%",
              height: "30%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 100,
              backgroundColor: "#18A2EB",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Settings Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "60%",
              height: "30%",
              borderColor: "white",
              borderWidth: 1,
              borderRadius: 100,
              backgroundColor: "green",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default Settings;
  