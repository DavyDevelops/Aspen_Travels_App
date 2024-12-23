import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Text, Searchbar, Button, Badge } from "react-native-paper";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import CoeurdesAlpes from "../assets/CoeurdesAlpes.png";
import AlleyPalace from "../assets/AlleyPalace.png";
import ExploreAspen from "../assets/ExploreAspen.png";
import LuminousAspen from "../assets/LuminousAspen.png";
import AppBarComponent from "../components/AppBar";

const ExploreScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Header */}
        <View style={[styles.header, { marginBottom: 16 }]}>
          <View>
            <Text style={styles.titleLight}>Explore</Text>
            <Text style={styles.title}>Aspen</Text>
          </View>

          <View style={styles.headerLocation}>
            <MaterialCommunityIcons
              name="map-marker"
              size={24}
              color="#176FF2"
            />
            <Text style={styles.subtitle}>Aspen, USA</Text>
            <Entypo name="chevron-thin-down" size={18} color="#176FF2" />
          </View>
        </View>

        {/* Search */}
        <Searchbar
          placeholder="Find things to do"
          placeholderTextColor="gray"
          style={[
            styles.searchbar,
            { backgroundColor: "#A8CCF0", marginBottom: 16 },
          ]}
          inputStyle={[styles.searchInput, { textAlignVertical: "center" }]}
          icon={() => (
            <MaterialCommunityIcons name="magnify" size={24} color="gray" />
          )}
        />

        {/* Tabs */}
        <View style={[styles.tabs, { marginBottom: 16 }]}>
          <Button mode="contained" style={styles.tabButton}>
            Location
          </Button>
          <Button mode="text" textColor="gray" style={styles.tabText}>
            Hotels
          </Button>
          <Button mode="text" textColor="gray" style={styles.tabText}>
            Food
          </Button>
          <Button mode="text" textColor="gray" style={styles.tabText}>
            Adventure
          </Button>
        </View>

        {/* Main Content */}
        <ScrollView>
          {/* Popular Section */}
          <View style={[styles.sectionHeader, { marginBottom: 16 }]}>
            <Text style={styles.sectionTitle}>Popular</Text>
            <Button textColor="#1E90FF">See all</Button>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              onPress={() => navigation.navigate("SecondBooking")}
            >
              <View style={styles.popularCard}>
                <Image source={AlleyPalace} style={styles.popularImage} />
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>Alley Palace</Text>
                  <View style={styles.rating}>
                    <MaterialCommunityIcons
                      name="star"
                      size={14}
                      color="#FFC107"
                    />
                    <Text style={styles.ratingText}>4.5</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("FirstBooking")}
            >
              <View style={styles.popularCard}>
                <Image source={CoeurdesAlpes} style={styles.popularImage} />
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>Coeurdes Alpes</Text>
                  <View style={styles.rating}>
                    <MaterialCommunityIcons
                      name="star"
                      size={14}
                      color="#FFC107"
                    />
                    <Text style={styles.ratingText}>4.5</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>

          {/* Recommended Section */}
          <View
            style={[styles.sectionHeader, { marginTop: 16, marginBottom: 16 }]}
          >
            <Text style={styles.sectionTitle}>Recommended</Text>
            <Button textColor="#1E90FF">See all</Button>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.recommendCard}>
              <Image source={ExploreAspen} style={styles.recommendImage} />
              <Badge style={styles.badge}>4N/5D</Badge>
              <Text style={styles.cardText}>Explore Aspen</Text>
            </View>

            <View style={styles.recommendCard}>
              <Image source={LuminousAspen} style={styles.recommendImage} />
              <Badge style={styles.badge}>2N/3D</Badge>
              <Text style={styles.cardText}>Luxurious Aspen</Text>
            </View>
          </ScrollView>
          <AppBarComponent />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  titleLight: {
    fontSize: 16,
    fontWeight: "normal",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginRight: 8,
  },
  searchbar: {
    marginHorizontal: 16,
    borderRadius: 25,
    height: 40,
  },
  searchInput: {
    fontSize: 14,
    color: "gray",
    textAlignVertical: "center",
    paddingVertical: 0,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabButton: {
    borderRadius: 20,
    backgroundColor: "#1E90FF",
  },
  tabText: {
    color: "gray",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  recommendCard: {
    width: 200,
    margin: 4,
    borderRadius: 8,
    overflow: "hidden",
  },
  recommendImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
  badge: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#1E90FF",
    color: "#fff",
  },
  popularCard: {
    width: 200,
    height: 250,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
    elevation: 4,
    backgroundColor: "#fff",
    position: "relative",
  },
  popularImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  badgeContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  badgeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 4,
  },
});

export default ExploreScreen;