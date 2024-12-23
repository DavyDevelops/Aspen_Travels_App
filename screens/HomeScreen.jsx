import { ImageBackground, StyleSheet, StatusBar, View } from "react-native";
import HomeImage from "../assets/Aspen.png";
import { Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <StatusBar hidden />
      <ImageBackground
        source={HomeImage}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.buttonContainer}>
          <Button
            mode="elevated"
            buttonColor="#176FF2"
            textColor="white"
            contentStyle={styles.buttonContent}
            onPress={() => navigation.navigate("Explore")}
          >
            Explore
          </Button>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignContent: "center",
  },
  buttonContainer: {
    marginBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
    alignSelf: "center",
  },
  buttonContent: {
    paddingVertical: 6,
  },
});
