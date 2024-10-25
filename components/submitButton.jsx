import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function SubmitButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      {/* Custom button */}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: 25,
  },
  button: {
    backgroundColor: "linen", // Button background color
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 5, // Rounded corners
    borderWidth: 0.2, // Border width
    borderColor: "#000", // Border color
    // Shadow styles for both iOS and Android
    shadowColor: "#000", // Shadow color (black)
    shadowOffset: { width: 0, height: 0 }, // Shadow offset (horizontal, vertical)
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.5, // Shadow radius (blur effect)
  },
  buttonText: {
    color: "black", // Text color
    fontSize: 16, // Font size
    textAlign: "center", // Center text
    // fontWeight: "bold", // Bold text
  },
});

export default SubmitButton;
