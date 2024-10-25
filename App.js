import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import DisplayContainer from "./components/displayDatabase";

// Custom components

import HorizontalRule from "./components/horizontalRule";
import InputDisplayArea from "./components/inputDisplayArea";
import OutputDisplayArea from "./components/outputDisplayArea";
import PlasterDropdown from "./components/dropdownPicker.jsx";
import CalculateSum from "./components/calculationFunctions.js";
import PlasterTypeSwitch from "./components/plasterTypeSwitches.jsx";
import {
  setupDatabase,
  getPlasters,
  clearDatabase,
  getPlasterById,
  getPlasterByName,
  getToggledPlasters,
} from "./components/database";
import React, { useEffect, useState } from "react";

const colorScheme = {
  palePurple: "E5D4ED",
  slateBlue: "6D72C3",
  rebeccaPurple: "5941A9",
  davyGrey: "514F59",
  darkPurple: "1D1128",
};
export default function App() {
  const [lengthInput, setLengthInput] = useState("");
  const [widthInput, setWidthInput] = useState("");
  const [outputResult, setOutputResult] = useState(0);
  const [thicknessInput, setThicknessInput] = useState("");
  const [selectedPlaster, setSelectedPlaster] = useState(null); // Store selected plaster
  const [plasterNeeded, setPlasterNeeded] = useState(0); // State for plaster needed
  const [bagsNeeded, setBagsNeeded] = useState(0); // State for bags needed
  const [contingencyInput, setContingencyInput] = useState(0);
  const [plasterData, setPlasterData] = useState([]); // Store plaster data
  const [data, setData] = useState([]);
  const [contingencyNeeded, setContingencyNeeded] = useState(0);
  const [totalPlasterNeeded, setTotalPlasterNeeded] = useState(0);
  const [totalArea, setTotalArea] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [InternalisEnabled, setInternalIsEnabled] = useState(true);
  const [ExternalisEnabled, setExternalIsEnabled] = useState(true);
  let currentPlaster = null;
  // set up dtatbase and fetch plasters
  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        await clearDatabase(); // Clear the database first (optional)
        await setupDatabase(); // Setup and insert initial data into the database
        await getPlasters((result) => {
          console.log("Plaster data: ", result);
          setPlasterData(result); // Set the plaster data in state
        });
      } catch (error) {
        setErrorMessage("Error loading database");
        console.error(
          "Error initializing the database and fetching plaster: ",
          error
        );
      }
    };

    initializeDatabase(); // Call the async function
  }, []); // This useEffect runs once on mount
  useEffect(() => {
    const fetchPlasterData = async () => {
      try {
        console.log("inside fetchPlasterData app.j");

        await getToggledPlasters(
          InternalisEnabled,
          ExternalisEnabled,
          (result) => {
            if (result && result.length > 0) {
              setPlasterData(result); // Update the state
            } else {
              console.log("No toggled plasters found");
            }
          }
        );
      } catch (error) {
        console.error("Error fetching toggled plasters: ", error);
        setErrorMessage("Error retrieving plasters.");
      }
    };

    fetchPlasterData();
  }, [InternalisEnabled, ExternalisEnabled]); // Re-run when switches change

  // Debugging log to check the data contentsa
  useEffect(() => {
    for (let item of data) {
      console.log(item);
    }
    // console.log("/n Database Data: ", data); // Log to check if data is fetched correctly
  }, [data]);
  // helper function that call the main calculation function. This is passed to the
  // output display for use as a onClick function
  const handleCalculation = () => {
    try {
      const length = parseFloat(lengthInput);
      const width = parseFloat(widthInput);
      const thickness = parseFloat(thicknessInput);
      const contingency = parseFloat(contingencyInput);

      // Validation checks
      if (isNaN(length) || length <= 0) {
        setErrorMessage("Please enter a valid length greater than 0.");
        return;
      }
      if (isNaN(width) || width <= 0) {
        setErrorMessage("Please enter a valid width greater than 0.");
        return;
      }
      if (isNaN(thickness) || thickness <= 0) {
        setErrorMessage("Please enter a valid thickness greater than 0.");
        return;
      }
      if (isNaN(contingency) || contingency < 0) {
        setErrorMessage(
          "Please enter a valid contingency percentage (0 or greater)."
        );
        return;
      }
      if (!selectedPlaster) {
        setErrorMessage("Please select a plaster");
        return;
      }

      setErrorMessage(""); // Clear error message
      CalculateSum(
        length,
        width,
        thickness,
        selectedPlaster,
        setPlasterNeeded,
        setBagsNeeded,
        contingency,
        setContingencyInput,
        setContingencyNeeded,
        setTotalPlasterNeeded,
        setTotalArea
      );
    } catch (error) {
      console.error("Error during calculation: ", error);
      setErrorMessage(
        "An error occurred during calculation. Please check your inputs."
      );
    }
    setErrorMessage(""); // Clear error message
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>PLASTER CALCULATOR</Text>
        <HorizontalRule />
        <PlasterTypeSwitch
          InternalisEnabled={InternalisEnabled}
          ExternalisEnabled={ExternalisEnabled}
          setInternalIsEnabled={setInternalIsEnabled}
          setExternalIsEnabled={setExternalIsEnabled}
        />
        <PlasterDropdown
          selectedPlaster={selectedPlaster}
          setSelectedPlaster={setSelectedPlaster}
          plasters={plasterData} // Pass plaster data as a prop
        />
        {/* <DisplayContainer data={data} /> */}
        {errorMessage ? (
          <Text style={{ color: "red" }}>{errorMessage}</Text>
        ) : null}
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
        {/* <HorizontalRule /> */}
        <Text style={{ color: "darkgrey", fontSize: 27 }}>RESULTS</Text>
        {/* <HorizontalRule /> */}
        <OutputDisplayArea
          label={"Area Total :"}
          sum={totalArea}
          plasterNeeded={plasterNeeded}
          bagsNeeded={bagsNeeded}
          contingencyNeeded={contingencyNeeded}
          totalPlasterNeeded={totalPlasterNeeded}
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
    backgroundColor: "linen",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  title: {
    fontSize: 27,
    paddingTop: 10,
    marginBottom: 10,
    color: "slategrey",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "linen",
    width: "100%",
  },
});
