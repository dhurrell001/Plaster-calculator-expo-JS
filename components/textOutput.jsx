import React from "react";
import { View, Text, StyleSheet } from "react-native";

function TextOutput({ label, sum }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.outputBox}>
        <Text style={styles.outputText}>{sum}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  outputBox: {
    height: 40,
    width: "20%",
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
  },
  outputText: {
    fontSize: 16,
    color: "#333",
  },
});

export default TextOutput;
