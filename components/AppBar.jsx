import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { BottomNavigation } from "react-native-paper";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HomeRoute = () => <View style={styles.screen} />;
const TicketsRoute = () => <View style={styles.screen} />;
const FavoritesRoute = () => <View style={styles.screen} />;
const ProfileRoute = () => <View style={styles.screen} />;

const AppBarComponent = () => {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: "home", title: "Home", icon: "home" },
    { key: "tickets", title: "Tickets", icon: "ticket" },
    { key: "favorites", title: "Favorites", icon: "heart" },
    { key: "profile", title: "Profile", icon: "user" },
  ];

  const renderIcon = ({ route, color }) => {
    switch (route.key) {
      case "home":
        return <MaterialCommunityIcons name="home-outline" size={24} color={color} />;
      case "tickets":
        return <MaterialCommunityIcons name="ticket-confirmation-outline" size={24} color={color} />;
      case "favorites":
        return <MaterialCommunityIcons name="cards-heart-outline" size={24} color={color} />;
      case "profile":
        return <FontAwesome name="user" size={24} color={color} />;
      default:
        return null;
    }
  };

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    tickets: TicketsRoute,
    favorites: FavoritesRoute,
    profile: ProfileRoute,
  });

  return (
    <View style={styles.bottomNavContainer}>
      <BottomNavigation
      key={setIndex}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderIcon={renderIcon}
        labeled={false}
        barStyle={styles.barStyle}
        activeColor="#0057FF"
        inactiveColor="#C5C5C5"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  bottomNavContainer: {
    backgroundColor: "white",
  },
  barStyle: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 4,
  },
});

export default AppBarComponent;
