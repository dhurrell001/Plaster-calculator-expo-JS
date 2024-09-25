import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
const HeaderImage = require("../assets/plasterImage.jpeg");

function HeadImage() {
  return (
    <View>
      <Image source={HeaderImage} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: "flex-start", // Align items at the top vertically
    alignItems: "center", // Align items in the center horizontally
    marginTop: 20,
    paddingTop: 50, // Optional: add padding to avoid status bar overlap
    backgroundColor: "red",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default HeadImage;
