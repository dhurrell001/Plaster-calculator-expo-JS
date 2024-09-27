import React from "react";
import { View, StyleSheet } from "react-native";

function HorizontalRule() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "black", // line color
    borderBottomWidth: 1, // line thickness
    marginVertical: 10, // spacing around the line
    width: "100%", // full width
  },
});

export default HorizontalRule;
