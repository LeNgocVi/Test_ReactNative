import React from "react";
import { View, SafeAreaView, StyleSheet, Text, Image } from "react-native";
import Left from "./assets/Left.png";
import Right from "./assets/Right.png";
const FlatList_ScrollView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FlatList and ScrollView</Text>
      </View>

      <View style={styles.content}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Image source={Right} style={styles.imageLeft}></Image>
          <Text> Mon 02 Nov - Sun 08 Nov 2020</Text>
          <Image source={Left} style={styles.image}></Image>
        </View>
        <View ></View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginLeft: 20,
    borderWidth: 1,
    color: "black",
  },
  header: {
    paddingTop: 52,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    width: 319,
    height: 24,
    fontSize: 18,
    lineHeight: 24,
    textAlign: "center",
  },
  image: {
    marginLeft: 31,
  },
  imageLeft: {
    marginLeft: 15,
    marginRight: 20,
  },
});
export default FlatList_ScrollView;
