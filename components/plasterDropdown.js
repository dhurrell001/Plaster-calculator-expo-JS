import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import * as SQLite from "expo-sqlite";

// Initialize the SQLite database
const db = SQLite.openDatabase("assets/PlasterDatabase.sqlite");

// Define the functional component
export default function PlasterDropdown() {
  // State to store plasters and selected plaster
  const [plasters, setPlasters] = useState([]);
  const [selectedPlaster, setSelectedPlaster] = useState("");

  // Fetch plasters from the database when the component mounts
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM plasters", [], (_, { rows }) => {
        setPlasters(rows._array); // Set the fetched data into the plasters state
      });
    });
  }, []);

  // Render the dropdown
  return (
    <Picker
      selectedValue={selectedPlaster}
      onValueChange={(itemValue) => setSelectedPlaster(itemValue)}
    >
      {plasters.map((plaster) => (
        <Picker.Item label={plaster.name} value={plaster.id} key={plaster.id} />
      ))}
    </Picker>
  );
}
