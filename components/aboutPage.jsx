import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Text>this some text</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "linen",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
});
export default AboutPage;
