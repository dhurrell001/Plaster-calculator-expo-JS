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
function InputDisplayArea({
  lengthInput, // Value for length input field
  widthInput, // Value for width input field
  thicknessInput, // Value for thickness input field
  setLengthInput, // Function to update length input value
  setWidthInput, // Function to update width input value
  setThicknessInput, // Function to update thickness input value
}) {
  // Function to calculate the sum (area) based on length and width inputs
  const calculateSum = () => {
    const length = parseFloat(lengthInput); // Convert length input to float
    const width = parseFloat(widthInput); // Convert width input to float

    // If both inputs are valid numbers, calculate the area
    if (!isNaN(length) && !isNaN(width)) {
      setOutputResult(length * width); // Calculate and set the result
      Keyboard.dismiss(); // Dismiss the keyboard after calculation
    } else {
      setOutputResult("Please enter valid numbers"); // Error message for invalid inputs
    }
  };

  return (
    // Main container for the input fields and button
    <View style={styles.container}>
      {/* Width input field with a label */}
      <LabeledTextInput
        label={"Please enter Width : "} // Label for the width input
        placeholder={"0"} // Placeholder text for width input
        value={widthInput} // Value controlled externally
        onChangeText={setWidthInput} // Update width value on input change
      />

      {/* Length input field with a label */}
      <LabeledTextInput
        label={"Please enter Length : "} // Label for the length input
        placeholder={"0"} // Placeholder text for length input
        value={lengthInput} // Value controlled externally
        onChangeText={setLengthInput} // Update length value on input change
      />

      {/* Thickness input field with a label */}
      <LabeledTextInput
        label={"Please enter thickness : "} // Label for the thickness input
        placeholder={"0"} // Placeholder text for thickness input
        value={thicknessInput} // Value controlled externally
        onChangeText={setThicknessInput} // Update thickness value on input change
      />

      {/* Button to trigger the calculateSum function */}
      <SubmitButton
        title="Calculate" // Label for the button
        onPress={calculateSum} // Function to run when button is pressed
      />
    </View>
  );
}

// Custom styles for the InputDisplayArea component
const styles = StyleSheet.create({
  // Style for the main container holding all inputs and button
  container: {
    flexDirection: "column", // Stack child elements (input fields) vertically
    alignItems: "center", // Center all child elements horizontally
    marginVertical: 20, // Add vertical spacing to the container
    backgroundColor: "silver",
    borderRadius: 10,
    width: "70%",
  },

  // Optional style for a title if added later
  title: {
    fontSize: 25, // Font size for title text
    marginBottom: 10, // Space below the title
  },
});

// Export the component to make it usable in other parts of the app
export default InputDisplayArea;
