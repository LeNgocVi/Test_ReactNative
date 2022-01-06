import { StyleSheet, Text, View, ScrollView } from "react-native";
import TabBar from "./ComponentNavigation/TabBar";
import FacebookLogin from "./FacebookLogin";
import FlatLists from "./FlatList";
import FlatList_ScrollView from "./FlatList_ScrollView";
import NavigationExample from "./NavitionExample";
import TheLight from "./TheLight";
// import LoginMomo from "./LoginMomo";

export default function App() {
  return (
    <View style={styles.containers}>
      {/* <FlatLists /> */}
      {/* <FacebookLogin/> */}
      {/* <TheLight></TheLight> */}
      {/* <LoginMomo /> */}
      {/* <FlatList_ScrollView /> */}
      {/* <NavigationExample /> */}
      <TabBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: "#b0006d",
  },
});
