import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select"; // Dropdown picker library
import { getPlasters } from "./database"; // Import the function that fetches plasters

function PlasterDropdown() {
  const [plasters, setPlasters] = useState([]); // Store plaster names
  const [selectedPlaster, setSelectedPlaster] = useState(null); // Store selected plaster

  // Fetch plaster names on component mount
  useEffect(() => {
    const fetchPlasters = async () => {
      await getPlasters((data) => {
        const pickerData = data.map((item) => ({
          label: item.plasterName, // Dropdown label
          value: item.plasterName, // Dropdown value
        }));
        setPlasters(pickerData); // Set fetched data to dropdown
        pickerData.forEach((x) => {
          console.log(`inside dropdown fetch ${JSON.stringify(x)}`);
        });
      });
    };
    fetchPlasters(); // Fetch data when component mounts
  }, []);

  return (
    <View style={styles.container}>
      <Text>Select Plaster Type:</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedPlaster(value)} // Set selected value
        items={plasters} // Dropdown items
        // placeholder={{ label: "Select a plaster...", value: null }} // Placeholder
        value={selectedPlaster} // Set value
      />
      {selectedPlaster && <Text>Selected Plaster: {selectedPlaster}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: "white",
    width: "70%",
    // Shadow styles for both iOS and Android
    shadowColor: "#000", // Shadow color (black)
    shadowOffset: { width: 0, height: 1 }, // Shadow offset (horizontal, vertical)
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.5, // Shadow radius (blur effect)
  },
});

export default PlasterDropdown;
