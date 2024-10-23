import React from "react"; // React import for functional component creation
import {
  SafeAreaView, // Ensures content avoids system UI elements (e.g., notch, status bar)
  View, // Container component for layout
  Text, // Component for displaying text
  TextInput, // Component for user input fields
  StyleSheet, // Utility for creating custom styles
  Keyboard, // Utility to handle keyboard behavior (e.g., dismissing it)
} from "react-native";

// Importing custom components
import LabeledTextInput from "./textInput"; // Custom text input with a label
import SubmitButton from "./submitButton"; // Custom button component

// Functional component for displaying a group of input fields
function OutputDisplayArea({
  label,
  sum,
  plasterNeeded,
  bagsNeeded,
  contingencyNeeded,
  totalPlasterNeeded,
}) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.outputBox}>
          <Text style={styles.outputText}>{sum}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Plaster required KG : </Text>
        <View style={styles.outputBox}>
          <Text style={styles.outputText}>{plasterNeeded}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Contingency required KG : </Text>
        <View style={styles.outputBox}>
          <Text style={styles.outputText}>{contingencyNeeded}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Total Plaster required KG: </Text>
        <View style={styles.outputBox}>
          <Text style={styles.outputText}>{totalPlasterNeeded}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Total bags required : </Text>
        <View style={styles.outputBox}>
          <Text style={styles.outputText}>{bagsNeeded}</Text>
        </View>
      </View>
    </View>
  );
}

// Styling to mirror style of input fields
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    // height: 200,
    width: "100%",
    paddingRight: 20,
    paddingLeft: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
  },
  outputBox: {
    height: 40,
    width: "27%",
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
  outerContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    width: "90%",
    marginTop: 20,

    borderRadius: 10,
    // Shadow styles for both iOS and Android
    shadowColor: "#000", // Shadow color (black)
    shadowOffset: { width: 0, height: 1 }, // Shadow offset (horizontal, vertical)
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.5, // Shadow radius (blur effect)

    // For Android elevation (required for Expo as well)
    elevation: 5, // Elevation for Android shadow
  },
});

export default OutputDisplayArea;
