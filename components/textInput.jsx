import React from "react";
import {
  SafeAreaView, // Ensures that content does not overlap with system UI elements
  View, // Container component for layout
  Text, // Component for displaying text
  TextInput, // Component for user input fields
  StyleSheet, // Component for creating custom styles
  Keyboard, // Utility to control the keyboard (like dismissing it)
} from "react-native";

// Functional component that creates a labeled text input field
// Accepts props for the label text, placeholder, input value, and a function to handle input changes
function LabeledTextInput({ label, placeholder, value, onChangeText }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Label for the input field */}
        <Text style={styles.label}>{label}</Text>

        {/* TextInput for user input, controlled by the parent component */}
        <TextInput
          style={styles.input} // Custom styles for input field
          placeholder={placeholder} // Placeholder text when input is empty
          value={value} // Current input value, controlled externally
          onChangeText={onChangeText} // Callback for handling changes in text input
          keyboardType="numeric" // Only allow numeric input
          // onSubmitEditing={Keyboard.dismiss()} // Optionally dismiss the keyboard on submit
        />
      </View>
    </SafeAreaView>
  );
}

// Custom styles for LabeledTextInput component
const styles = StyleSheet.create({
  // Container style for aligning label and input horizontally
  container: {
    marginVertical: 10, // Vertical margin for spacing
    flexDirection: "row", // Align children in a row (label and input)
    paddingHorizontal: 10, // Horizontal padding inside the container
    justifyContent: "flex-start", // Align items to the left
    alignItems: "center", // Vertically center the label and input
  },

  // Style for the label text
  label: {
    fontSize: 16, // Font size for label text
    marginBottom: 5, // Spacing between the label and the input
    color: "#333", // Text color for the label (dark grey)
  },

  // Style for the text input field
  input: {
    height: 30, // Height of the input field
    borderColor: "#ccc", // Border color (light grey)
    borderWidth: 1, // Border width
    paddingHorizontal: 10, // Padding inside the input field
    borderRadius: 5, // Rounded corners for the input field
    backgroundColor: "#f9f9f9", // Light background color for the input field
  },
});

// Export the component to make it available for other parts of the app
export default LabeledTextInput;
