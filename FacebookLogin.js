import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import facebook from "./assets/facebook.png";
const FacebookLogin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Image
        source={facebook}
        style={{
          height: null,
          width: "100%",
          aspectRatio: 512 / 288,
          resizeMode: "contain",
        }}
      />
      <View style={styles.content}>
        <View>
          <TextInput
            // secureTextEntry={true}
            // autoFocus={true}
            style={styles.inputPassword}
            placeholder="Số điện thoại hoặc email"
            keyboardType="numeric"
            placeholderTextColor="#000"
          ></TextInput>
          <TextInput
            secureTextEntry={true}
            autoFocus={true}
            style={styles.inputPassword}
            placeholder="Mật khẩu"
            keyboardType="numeric"
            placeholderTextColor="#000"
          ></TextInput>
          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
          <Text style={styles.textAction}>Quên mật khẩu?</Text>
          <Text style={styles.textAction}>Quay lại</Text>
        </View>
        <View style={styles.LoginTop}>
          <View
            style={{ flexDirection: "row", alignItems: "center", width: "70%" }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                borderWidth: 1,
              }}
            ></View>
            <Text style={{ width: 60, textAlign: "center", fontSize: 15 }}>
              Hoặc
            </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                borderWidth: 1,
              }}
            ></View>
          </View>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.buttonRegisterText}>Tạo tài khoản mới</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const TEXT = {
  color: "#fff",
  textAlign: "center",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 30,
    justifyContent: "space-between",
  },
  inputPassword: {
    marginTop: 2,
    height: 40,
    borderRadius: 2,
    borderWidth: 1,
    textAlign: "center",
  },
  buttonLogin: {
    // ...TEXT,
    backgroundColor: "blue",
    height: 45,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonLoginText: {
    ...TEXT,
  },
  LoginTop: {
    alignItems: "center",
  },
  buttonRegister: {
    backgroundColor: "blue",
    height: 40,
    width: 300,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonRegisterText: {
    ...TEXT,
  },
  textAction: {
    textAlign: "center",
    marginTop: 20,
    color:"blue",
    fontSize: 15,
  },
});
export default FacebookLogin;
