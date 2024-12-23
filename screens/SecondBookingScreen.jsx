import React from "react";
import { View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { Card, Button, Text } from "react-native-paper";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import AlleyPalace from "../assets/AlleyPalace.png";
import Entypo from "@expo/vector-icons/Entypo";

const { height } = Dimensions.get("window");

export default function SecondBookingScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Card Container */}
      <Card style={styles.card}>
        {/* Image and Back Button */}
        <View>
          <Image source={AlleyPalace} style={styles.image} />
          {/* Back Button */}
          <Entypo
            name="chevron-thin-left"
            size={18}
            color="gray"
            style={styles.backButton}
          />
          {/* Favorite Button */}
          <Entypo
            name="heart"
            size={22}
            color="#e63946"
            style={styles.favoriteButton}
          />
        </View>

        {/* Content */}
        <Card.Content>
          <Text variant="headlineSmall" style={styles.title}>
          Alley Palace
          </Text>
          <Text style={styles.rating}>
            <Feather name="star" size={16} color="#f4b400" /> 4.5 (355 Reviews)
          </Text>
          <Text style={styles.description}>
            Aspen is as close as one can get to a storybook alpine town in
            America. The choose-your-own-adventure possibilities—skiing, hiking,
            dining, shopping and more.
          </Text>

          {/* Facilities */}
          <Text style={styles.sectionTitle}>Facilities</Text>
          <View style={styles.facilities}>
            <View style={styles.facilityItem}>
              <MaterialCommunityIcons name="radiator" size={24} color="#666" />
              <Text>Heater</Text>
            </View>
            <View style={styles.facilityItem}>
              <Feather name="coffee" size={24} color="#666" />
              <Text>Dinner</Text>
            </View>
            <View style={styles.facilityItem}>
              <MaterialCommunityIcons
                name="bathtub-outline"
                size={24}
                color="#666"
              />
              <Text>1 Tub</Text>
            </View>
            <View style={styles.facilityItem}>
              <MaterialCommunityIcons name="pool" size={24} color="#666" />
              <Text>Pool</Text>
            </View>
          </View>
        </Card.Content>

        {/* Price and Button */}
        <View style={styles.footer}>
          <Text style={styles.price}>
            Price: <Text style={styles.priceHighlight}>$199</Text>
          </Text>
                    <View style={styles.buttonContainer}>
                    <Button mode="elevated" buttonColor="#176FF2" textColor="white"
                    contentStyle={styles.buttonContent}
                    >Book Now</Button>
                    </View>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eaf2ff",
    paddingVertical: 10,
  },
  card: {
    width: "95%",
    height: height * 0.9, // 90% of the screen height
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "space-between",
    backgroundColor: "#FBFCFD",
  },
  image: {
    height: height * 0.4, // 40% of the screen height
    width: "100%",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 8,
    borderRadius: 50,
  },
  favoriteButton: {
    position: "absolute",
    top: height * 0.35,
    right: 20,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 8,
    borderRadius: 50,
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    color: "#666",
  },
  description: {
    color: "#666",
    marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  facilities: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  facilityItem: {
    alignItems: "center",
    backgroundColor: "#F1F5FC",
    padding: 15,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  price: {
    fontWeight: "bold",
    color: "#666",
  },
  priceHighlight: {
    color: "#28a745",
  },
  button: {
    borderRadius: 20,
  },
  buttonContainer:{
    marginBottom: 20,
    paddingLeft: 25,
    paddingRight:15,
    width: '60%',
    alignSelf: "center",
    },
  buttonContent: {
    paddingVertical: 6,
  }
});