import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import FirstBookingScreen from "./screens/FirstBookingScreen";
import SecondBookingScreen from "./screens/SecondBookingScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Explore"
          component={ExploreScreen}
          options={{ title: "Explore Aspen" }}
        />
        <Stack.Screen
          name="FirstBooking"
          component={FirstBookingScreen}
          options={{ title: "Alley Palace Booking Screen" }}
        />
        <Stack.Screen
          name="SecondBooking"
          component={SecondBookingScreen}
          options={{ title: "Coeurdes Alpes Booking Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
