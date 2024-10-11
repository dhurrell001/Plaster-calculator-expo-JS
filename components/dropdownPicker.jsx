import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select"; // Dropdown picker library
import { getPlasters } from "./database"; // Import the function that fetches plasters

function PlasterDropdown({ selectedPlaster, setSelectedPlaster }) {
  const [plasters, setPlasters] = useState([]); // Store plaster names
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch all plaster names on app start. Use map to retrieve
  // each plaster name
  useEffect(() => {
    const fetchPlasters = async () => {
      console.log("Fetching plasters inside dropdown...");
      await getPlasters((data) => {
        const pickerData = data.map((item) => ({
          label: item.plasterName, // Dropdown label
          value: item, // Dropdown value
        }));
        console.log("Picker Data: ", pickerData); // Log fetched data
        setPlasters(pickerData); // Set fetched data to dropdown
        setLoading(false);
        // display plaster data for testing
        pickerData.forEach((x) => {
          console.log(`inside dropdown fetch  ${JSON.stringify(x)}`);
        });
      });
    };
    fetchPlasters(); // Fetch data when component mounts
  }, []);
  // Log selectedPlaster every time it changes
  useEffect(() => {
    if (selectedPlaster) {
      console.log(`Selected Plaster: ${JSON.stringify(selectedPlaster)}`);
    }
  }, [selectedPlaster]);
  if (loading) {
    return <Text>Loading plasters...</Text>; // Display loading message until data is fetched
  }
  return (
    <View style={styles.container}>
      <Text>Select Plaster Type:</Text>
      {plasters.length > 0 ? (
        <RNPickerSelect
          onValueChange={(value) => {
            setSelectedPlaster(value); // Set the full plaster object as selected
          }}
          items={plasters} // Dropdown items
          value={selectedPlaster} // Set value to selected plaster
        />
      ) : (
        <Text>Loading plasters...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column", // Stack child elements (input fields) vertically
    alignItems: "center", // Center all child elements horizontally
    margin: 20,
    padding: 10,
    // borderColor: "#000",
    // borderWidth: 0.5,
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
