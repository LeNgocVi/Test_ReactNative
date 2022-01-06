import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const DATA = [
  {
    id: 1,
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    title: "First Item ",
    content:
      "A performant interface for rendering basic, flat lists, supporting the most handy features",
    time: "8.00am 24, May 2020",
  },
  {
    id: 2,
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    title: "Second Item",
    content:
      "A performant interface for rendering basic, flat lists, supporting the most handy features",
    time: "8.00am 24, May 2020",
  },
  {
    id: 3,
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    title: "Second Item",
    content:
      "A performant interface for rendering basic, flat lists, supporting the most handy features",
    time: "8.00am 24, May 2020",
  },
  {
    id: 4,
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    title: "Second Item",
    content:
      "A performant interface for rendering basic, flat lists, supporting the most handy features",
    time: "8.00am 24, May 2020",
  },
  {
    id: 5,
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
    title: "Second Item",
    content:
      "A performant interface for rendering basic, flat lists, supporting the most handy features",
    time: "8.00am 24, May 2020",
  },
];
const Item = ({ image, title, content, time }) => (
  <View style={styles.item}>
    <Image style={styles.image} source={image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.content}>{content}</Text>
    <Text style={styles.time}>{time}</Text>
  </View>
);
const FlatLists = () => {
  const renderItem = ({ item }) => (
    <Item
      image={item.image}
      title={item.title}
      content={item.content}
      time={item.time}
    />
  );
  return (
    <View>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  image: {
    backgroundColor: "#fff",
    height: 250,
    borderRadius: 20,
  },
});
export default FlatLists;
