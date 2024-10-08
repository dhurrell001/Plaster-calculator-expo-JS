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
  getPlasterById,
  getPlasterByName,
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
  let currentPlaster = null;
  // Initialize the database and fetch data from it
  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        await clearDatabase(); // Clear the database first
        await setupDatabase(); // Setup and insert initial data into the database
        await getPlasters((result) => {
          console.log("Plaster data: ", result);
          setData(result); // Set the data in state
        });

        // Fetch plaster by name after data is initialized
        const plaster = await getPlasterByName("Hardwall"); // Fetch specific plaster by name
        if (plaster) {
          currentPlaster = plaster;
          console.log("Fetched plaster: ", currentPlaster.plasterType);
        } else {
          console.log("No plaster found with the name 'Hardwall'.");
        }
      } catch (error) {
        console.error(
          "Error initializing the database and fetching plaster: ",
          error
        );
      }
    };

    initializeDatabase();
  }, []); // This useEffect runs once on mount
  // Debugging log to check the data
  useEffect(() => {
    console.log("Database Data: ", data); // Log to check if data is fetched correctly
  }, [data]);
  // // Fetch plaster by ID
  // useEffect(() => {
  //   const fetchPlasterByName = async () => {
  //     const plaster = await getPlasterByName("Hardwall"); // Replace 28 with the ID you want to fetch
  //     if (plaster) {
  //       setCurrentPlaster(plaster);
  //       console.log("Fetched plaster:", plaster);
  //     }
  //   };

  //   fetchPlasterByName();
  // }, []); // This effect will run once, after the initial render

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
