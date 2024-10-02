import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Keyboard,
  ScrollView,
} from "react-native";
import { useState } from "react";

// Custom components
import HeadImage from "./components/headerImage";
import LabeledTextInput from "./components/textInput";

import TextOutput from "./components/textOutput";
import SubmitButton from "./components/submitButton";
import HorizontalRule from "./components/horizontalRule";
import InputDisplayArea from "./components/inputDisplayArea";
import OutputDisplayArea from "./components/outputDisplayArea";

export default function App() {
  const [lengthInput, setLengthInput] = useState("");
  const [widthInput, setWidthInput] = useState("");
  const [outputResult, setOutputResult] = useState("null");
  const [thicknessInput, setThicknessInput] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Plaster Calculator</Text>
        <HorizontalRule />
        {/* <HeadImage /> */}
        <InputDisplayArea
          lengthInput={lengthInput}
          widthInput={widthInput}
          thicknessInput={thicknessInput}
          setLengthInput={setLengthInput}
          setWidthInput={setWidthInput}
          setThicknessInput={setThicknessInput}
        />

        <HorizontalRule />
        <Text style={{ color: "white", fontSize: 25 }}>Results</Text>
        <HorizontalRule />
        <OutputDisplayArea
          label={"Area Total :"}
          sum={outputResult}
        ></OutputDisplayArea>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "#D3D3D3",
    backgroundColor: "steelblue",
    alignItems: "center",
    marginTop: 30,
    // justifyContent: "space-around",
    width: "100%",
  },
  title: {
    fontSize: 30,
    paddingTop: 10,
    marginBottom: 10,
    color: "white",
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures ScrollView uses available space
    justifyContent: "center", // Align content vertically in center
    alignItems: "center", // Align content horizontally in center
    paddingVertical: 30, // Add padding at the top and bottom
    backgroundColor: "steelblue",
    width: "100%",
  },
});
