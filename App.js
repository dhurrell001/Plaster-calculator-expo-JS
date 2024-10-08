import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import DisplayContainer from "./components/displayDatabase";

// Custom components

import HorizontalRule from "./components/horizontalRule";
import InputDisplayArea from "./components/inputDisplayArea";
import OutputDisplayArea from "./components/outputDisplayArea";
import {
  setupDatabase,
  getPlasters,
  clearDatabase,
} from "./components/database";
import React, { useEffect, useState } from "react";

export default function App() {
  const [lengthInput, setLengthInput] = useState("");
  const [widthInput, setWidthInput] = useState("");
  const [outputResult, setOutputResult] = useState(0);
  const [thicknessInput, setThicknessInput] = useState("");
  // Set up the database and fetch data on app load
  // useEffect(() => {
  //   console.log("Setting up database...");
  //   setupDatabase();
  // }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    const initializeDatabase = async () => {
      await clearDatabase();
      await setupDatabase();
      await getPlasters((result) => {
        console.log(result); // Add this line to log the data
        setData(result); // Fetch and set data
      });
    };

    initializeDatabase();
  }, []);
  // Debugging log to check the data
  useEffect(() => {
    console.log("Database Data: ", data); // Log to check if data is fetched correctly
  }, [data]);
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Plaster Calculator</Text>
        <HorizontalRule />
        {/* <HeadImage /> */}
        <DisplayContainer data={data} />
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
    backgroundColor: "steelblue",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  title: {
    fontSize: 30,
    paddingTop: 10,
    marginBottom: 10,
    color: "white",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "steelblue",
    width: "100%",
  },
});
