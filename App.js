import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import DisplayContainer from "./components/displayDatabase";

// Custom components

import HorizontalRule from "./components/horizontalRule";
import InputDisplayArea from "./components/inputDisplayArea";
import OutputDisplayArea from "./components/outputDisplayArea";
import PlasterDropdown from "./components/dropdownPicker.jsx";
import CalculateSum from "./components/calculationFunctions.js";
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
  const [selectedPlaster, setSelectedPlaster] = useState(null); // Store selected plaster
  const [plasterNeeded, setPlasterNeeded] = useState(0); // State for plaster needed
  const [bagsNeeded, setBagsNeeded] = useState(0); // State for bags needed
  const [contingencyInput, setContingencyInput] = useState(0);

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
        // const plaster = await getPlasterByName("Hardwall"); // Fetch specific plaster by name
        // if (plaster) {
        //   setSelectedPlaster(plaster);
        //   // console.log("Fetched plaster: ", selectedPlaster.plasterType);
        // } else {
        //   console.log("No plaster found with the name 'Hardwall'.");
        // }
      } catch (error) {
        console.error(
          "Error initializing the database and fetching plaster: ",
          error
        );
      }
    };

    initializeDatabase();
  }, []); // This useEffect runs once on mount
  // Debugging log to check the data contentsa
  useEffect(() => {
    console.log("Database Data: ", data); // Log to check if data is fetched correctly
  }, [data]);
  // helper function that call the main calculation function. This is passed to the
  // output display for use as a onClick function
  const handleCalculation = () => {
    console.log(
      `selected plaster inside handle calc func ${selectedPlaster.plasterName},${selectedPlaster.coveragePerMMperSQM}`
    );
    CalculateSum(
      lengthInput,
      widthInput,
      thicknessInput,
      selectedPlaster,
      setPlasterNeeded,
      setBagsNeeded,
      contingencyInput,
      setContingencyInput
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Plaster Calculator</Text>
        <HorizontalRule />
        <PlasterDropdown
          selectedPlaster={selectedPlaster}
          setSelectedPlaster={setSelectedPlaster}
        />
        {/* <DisplayContainer data={data} /> */}
        <InputDisplayArea
          lengthInput={lengthInput}
          widthInput={widthInput}
          thicknessInput={thicknessInput}
          setLengthInput={setLengthInput}
          setWidthInput={setWidthInput}
          setThicknessInput={setThicknessInput}
          contingencyInput={contingencyInput}
          setContingencyInput={setContingencyInput}
          calculateSum={handleCalculation} //passsing the function to display onClick
        />
        <HorizontalRule />
        <Text style={{ color: "white", fontSize: 25 }}>Results</Text>
        <HorizontalRule />
        <OutputDisplayArea
          label={"Area Total :"}
          sum={outputResult}
          plasterNeeded={plasterNeeded}
          bagsNeeded={bagsNeeded}
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
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  title: {
    fontSize: 30,
    paddingTop: 10,
    marginBottom: 10,
    color: "silver",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "white",
    width: "100%",
  },
});
