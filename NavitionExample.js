import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Button,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
} from "react-native";
const Stack = createNativeStackNavigator();
const NavigationExample = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="hihi" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <Button title="Home" onPress={() => navigation.navigate("hihi")} />
    </View>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
const Profile = ({ navigation }) => {
  return (
    <View>
      <Button
        title="hihi"
        onPress={() => {
          navigation.navigate("hihi");
        }}
      ></Button>
    </View>
  );
};
export default NavigationExample;
