import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
} from "react-native";
import LabeledTextInput from "./textInput";
import SubmitButton from "./submitButton";

function InputDisplayArea({
  lengthInput,
  widthInput,
  setLengthInput,
  setWidthInput,
}) {
  const calculateSum = () => {
    const length = parseFloat(lengthInput);
    const width = parseFloat(widthInput);

    if (!isNaN(length) && !isNaN(width)) {
      setOutputResult(length * width);
      Keyboard.dismiss();
    } else {
      setOutputResult("Please enter valid numbers");
    }
  };
  return (
    <View style={styles.container}>
      <LabeledTextInput
        label={"Please enter Width : "}
        placeholder={"0"}
        value={widthInput}
        onChangeText={setWidthInput}
      />
      <LabeledTextInput
        label={"Please enter Length : "}
        placeholder={"0"}
        value={lengthInput}
        onChangeText={setLengthInput}
      />
      {/* <LabeledTextInput label={"Please enter thickness : "} placeholder={"0"} /> */}
      {/* Button to trigger calculation */}
      <SubmitButton title="Calculate" onPress={calculateSum} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", // Stack inputs vertically
    alignItems: "center", // Center horizontally
    marginVertical: 20, // Add space around the container
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
});

export default InputDisplayArea;
