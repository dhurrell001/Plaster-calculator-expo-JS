import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select"; // Dropdown picker library
import { getPlasters } from "./database"; // Import the function that fetches plasters

function PlasterDropdown({ selectedPlaster, setSelectedPlaster, plasters }) {
  const [loading, setLoading] = useState(true);
  // hook to check if plasters exist and is populated, sets the loadinf state to false
  useEffect(() => {
    if (plasters && plasters.length > 0) {
      setLoading(false);
    }
  }, [plasters]);

  //  search for select plaster by name. This avoids erractic dropdown menu caused by
  // dropdown menu value as an object
  const handlePlasterChange = (plasterName) => {
    const selected = plasters.find(
      (plaster) => plaster.plasterName === plasterName
    );
    setSelectedPlaster(selected); // Set the full plaster object
  };

  if (loading) {
    return <Text>Loading plasters...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>Select Plaster Type:</Text>

      {plasters.length > 0 ? (
        <RNPickerSelect
          onValueChange={handlePlasterChange} //passes the value(plasterName) to search function
          items={plasters.map((item) => ({
            label: item.plasterName,
            value: item.plasterName, // Store plasterName as the value
          }))}
          value={selectedPlaster ? selectedPlaster.plasterName : null} // Set plasterName as the value
          placeholder={{
            label: "Select a plaster...",
            value: null,
          }}
        />
      ) : (
        <Text>No plasters available.</Text>
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
    width: "90%",
    // Shadow styles for both iOS and Android
    shadowColor: "#000", // Shadow color (black)
    shadowOffset: { width: 0, height: 1 }, // Shadow offset (horizontal, vertical)
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.5, // Shadow radius (blur effect)
    fontSize: 18,
  },
});

export default PlasterDropdown;
