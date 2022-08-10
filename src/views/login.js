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
const Login = () => {
  return (
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require("../image/bg.jpg")}
      resizeMode="stretch"
    >
      <View style={{ height: "100%", width: "100%" }}>
        <View
          style={{
            width: "100%",
            height: "20%",
            marginTop: 0.3 * windowsHeight,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "70%",
              height: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white" }}>Email</Text>
            <TextInput
              style={{
                height: "100%",
                width: "70%",
                borderBottomColor: "white",
                borderBottomWidth: 1,
                textAlign: "center",
                alignItems: "center",
                color: "white",
              }}
              autoCapitalize="none"
            />
          </View>
          <View
            style={{
              width: "70%",
              height: 30,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "white" }}>Password</Text>
            <TextInput
              style={{
                height: "100%",
                width: "70%",
                borderBottomColor: "white",
                borderBottomWidth: 1,
                textAlign: "center",
                color: "white",
              }}
              autoCapitalize="none"
              secureTextEntry={true}
            />
          </View>
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
            <Text style={{ color: "white", fontSize: 20 }}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#4D33B9",
              width: "60%",
              height: "30%",
              borderRadius: 100,
              borderColor: "white",
              borderWidth: 1,
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
