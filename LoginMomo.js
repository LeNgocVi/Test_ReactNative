import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
const LoginMomo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.hiText}>Xin Chào!</Text>
          <Text style={styles.userText}>LÊ NGỌC VĨ</Text>
          <Text style={styles.userText}>037 6802 648</Text>
        </View>
      </View>
      <View style={styles.form}>
        <FontAwesome
          name="lock"
          size={24}
          color="black"
          style={{ position: "relative", top: 11, left: 20, zIndex: 10 }}
        />
        <TextInput
          secureTextEntry={true}
          autoFocus={true}
          style={styles.inputPassword}
          placeholder="Nhập mật khẩu"
          keyboardType="numeric"
          placeholderTextColor="#929292"
        ></TextInput>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.buttonLoginText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.buttonAction}>
          <Text style={styles.buttonActionText}>QUÊN MẬT KHẨU</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAction}>
          <Text style={styles.buttonActionText}>THOÁT TÀI KHOẢN</Text>
        </TouchableOpacity>
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
    backgroundColor: "#b0006d",
    paddingTop: 90,
  },
  content: {
    backgroundColor: "#b0006d",
  },
  textWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  hiText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,
  },
  form: {
    margin: 30,
  },
  buttonLoginText: {
    ...TEXT,
  },
  inputPassword: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 25,
    textAlign: "center",
  },
  buttonLogin: {
    ...TEXT,
    backgroundColor: "red",
    height: 50,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  action: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonActionText: {
    marginLeft: 20,
    marginRight: 20,
    ...TEXT,
  },
});
export default LoginMomo;
