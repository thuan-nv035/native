import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
} from "react-native";
import React, { useState, useCallback } from "react";
import { TextInput } from "react-native";
import axios from "axios";
import { ActivityIndicator } from "react-native";
const windowsWidth = Dimensions.get("window").width;
const windowsHeight = Dimensions.get("window").height;
const Home = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const api = {
    key: "486a7dceff36934a00e8daaa99a9630e",
    baseUrl: "http://api.openweathermap.org/data/2.5/",
  };

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setInput("");
    axios
      .request({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.dir(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [api.key, input]);
  return (
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require("../image/bg.jpg")}
      resizeMode="stretch"
    >
      <StatusBar color="white" />
      <View>
        <TextInput
          placeholder="Enter city name and press return..."
          onChangeText={(text) => setInput(text)}
          value={input}
          placeholderTextColor={"#000"}
          style={{
            borderBottomWidth: 3,
            padding: 5,
            paddingVertical: 20,
            marginVertical: 100,
            marginHorizontal: 10,
            backgroundColor: "#fff",
            fontSize: 19,
            fontWeight: "300",
            borderRadius: 16,
            borderBottomColor: "#df8e00",
          }}
          onSubmitEditing={fetchDataHandler}
        />
      </View>
      {loading && (
        <View>
          <ActivityIndicator size={"large"} color="#000" />
        </View>
      )}

      {data && (
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ color: "#fff", fontSize: 40, fontWeight: "bold" }}
          >{`${data?.name}, ${data?.sys?.country}`}</Text>
          <Text style={{ color: "#fff", fontSize: 22, marginVertical: 10 }}>
            {new Date().toLocaleString()}
          </Text>
          <Text
            style={{ fontSize: 45, color: "#fff", marginVertical: 10 }}
          >{`${Math.round(data?.main?.temp)} °C`}</Text>
          <Text
            style={{
              fontSize: 22,
              color: "#fff",
              marginVertical: 10,
              fontWeight: "500",
            }}
          >{`Min ${Math.round(data?.main?.temp_min)} °C / Max ${Math.round(
            data?.main?.temp_max
          )} °C`}</Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default Home;
