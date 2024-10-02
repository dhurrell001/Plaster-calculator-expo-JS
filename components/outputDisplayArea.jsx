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
function OutputDisplayArea({ label, sum }) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.outputBox}>
          <Text style={styles.outputText}>{sum}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Plaster required : </Text>
        <View style={styles.outputBox}>
          <Text style={styles.outputText}>{sum}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Contingency required : </Text>
        <View style={styles.outputBox}>
          <Text style={styles.outputText}>{sum}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Total Plaster required : </Text>
        <View style={styles.outputBox}>
          <Text style={styles.outputText}>{sum}</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "silver",
    borderRadius: 10,
    // height: 200,
    width: "100%",
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
  outerContainer: {
    flexDirection: "column",
    backgroundColor: "silver",
    width: "70%",
    borderRadius: 10,
  },
});

export default OutputDisplayArea;
