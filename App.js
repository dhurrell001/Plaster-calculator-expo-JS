import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HeadImage from "./components/headerImage";
import LabeledTextInput from "./components/textInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plaster Calculator</Text>
      <HeadImage />
      <LabeledTextInput label={"Please enter Width : "} placeholder={"0"} />
      <LabeledTextInput label={"Please enter Length : "} placeholder={"0"} />
      <LabeledTextInput label={"Please enter thickness : "} placeholder={"0"} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // backgroundColor: "blue",
    alignItems: "center",
    marginTop: 30,
    // justifyContent: "space-around",
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
});
