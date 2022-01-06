import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  Platform,
  Switch,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
import bulbOff from "./assets/thedask.png";
import bulbOn from "./assets/thelight.png";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function TheLight() {
  const os = Platform.OS;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((trangthaicu) => !trangthaicu);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark"></StatusBar>
      <Image source={isEnabled ? bulbOn : bulbOff} style={styles.image}></Image>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Button
        title={"Bật/Tắt đèn " + os}
        color={Platform.OS === "android" ? "#841584" : "#fff"}
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    // maxHeight: "100%",
    // maxWidth: "100%",
    // resizeMode: "contain",
    backgroundColor: "red",
    width: windowWidth,
    height: (windowWidth * 715) / 715,
  },
});
