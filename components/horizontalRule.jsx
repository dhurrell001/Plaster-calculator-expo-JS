import React from "react";
import { View, StyleSheet } from "react-native";

// Function to create horizontal line. Used to divide screen into
//segments
function HorizontalRule() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    borderBottomColor: "whitew", // line color
    borderBottomWidth: 1, // line thickness
    marginVertical: 10, // spacing around the line
    width: "60%", // full width
  },
});

export default HorizontalRule;
