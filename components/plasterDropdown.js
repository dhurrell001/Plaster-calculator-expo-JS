import { Picker } from "@react-native-picker/picker";
import React, { useState, useEffect } from "react";

export default function PlasterDropdown() {
  const [plasters, setPlasters] = useState([]);
  const [selectedPlaster, setSelectedPlaster] = useState("");

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM plasters", [], (_, { rows }) => {
        setPlasters(rows._array); // Fetch plaster data
      });
    });
  }, []);

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
