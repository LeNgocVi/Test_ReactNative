import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Home";
const Tab = createBottomTabNavigator();
import {
  Button,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
} from "react-native";
// const Stack = createNativeStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#000000",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Image
                source={require("../assets/icon/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              ></Image>
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                HOME
              </Text>
            </View>;
          },
        }}
      />
      <Tab.Screen name="Settings"  component={SettingsScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 5,
  },
});
export default function TabBar() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
// const TabBar = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: "Welcome" }}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//         <Stack.Screen name="hihi" component={Profile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// const HomeScreen = ({ navigation }) => {
//   return (
//     <View>
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigation.navigate("Profile", { name: "Jane" })}
//       />
//       <Button title="Home" onPress={() => navigation.navigate("hihi")} />
//     </View>
//   );
// };
// const ProfileScreen = ({ navigation, route }) => {
//   return <Text>This is {route.params.name}'s profile</Text>;
// };
// const Profile = ({ navigation }) => {
//   return (
//     <View>
//       <Button
//         title="hihi"
//         onPress={() => {
//           navigation.navigate("hihi");
//         }}
//       ></Button>
//     </View>
//   );
// };
// export default TabBar;
