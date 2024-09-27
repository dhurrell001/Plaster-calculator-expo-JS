import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Keyboard } from "react-native";
import { useState } from "react";

// Custom components
import HeadImage from "./components/headerImage";
import LabeledTextInput from "./components/textInput";

import TextOutput from "./components/textOutput";
import SubmitButton from "./components/submitButton";
import HorizontalRule from "./components/horizontalRule";
import InputDisplayArea from "./components/inputDisplayArea";

export default function App() {
  const [lengthInput, setLengthInput] = useState("");
  const [widthInput, setWidthInput] = useState("");
  const [outputResult, setOutputResult] = useState("null");
  const [thicknessInput, setThicknessInput] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plaster Calculator</Text>
      <HorizontalRule />
      <HeadImage />
      <InputDisplayArea
        lengthInput={lengthInput}
        widthInput={widthInput}
        thicknessInput={thicknessInput}
        setLengthInput={setLengthInput}
        setWidthInput={setWidthInput}
        setThicknessInput={setThicknessInput}
      />

      <HorizontalRule />
      <Text style={{ color: "blue" }}>RESULTS</Text>
      <TextOutput label={"Area Total :"} sum={outputResult}></TextOutput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    marginTop: 30,
    // justifyContent: "space-around",
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
});
