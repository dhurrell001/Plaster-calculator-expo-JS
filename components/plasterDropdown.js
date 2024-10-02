import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { useSQLiteContext } from "expo-sqlite"; // Import SQLiteContext

export default function PlasterDropdown() {
  const [plasters, setPlasters] = useState([]); // State to store plaster data
  const [selectedPlaster, setSelectedPlaster] = useState(""); // State to store selected plaster
  const { db } = useSQLiteContext(); // Get the database from context

  useEffect(() => {
    const fetchPlasters = async () => {
      console.log("Attempting to fetch plasters...");

      try {
        // Check if Plasters table exists
        const tableCheckResult = await db.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='Plasters'"
        );

        if (tableCheckResult[0].rows.length > 0) {
          console.log("Plasters table exists.");

          // Fetch plasters if the table exists
          const result = await db.executeSql("SELECT * FROM Plasters");

          if (result && result[0] && result[0].rows) {
            const fetchedPlasters = result[0].rows._array;
            console.log("Fetched plasters:", fetchedPlasters); // Log plaster data
            setPlasters(fetchedPlasters);
          } else {
            console.log("No data found in Plasters table.");
          }
        } else {
          console.log("Plasters table does not exist.");
        }
      } catch (error) {
        console.error("Error fetching plasters:", error);
      }
    };

    if (db) {
      fetchPlasters();
    } else {
      console.log("Database not loaded yet.");
    }
  }, [db]);

  return (
    <Picker
      style={{
        height: 50,
        width: "70%",
        color: "black",
        backgroundColor: "white",
      }}
      selectedValue={selectedPlaster}
      onValueChange={(itemValue) => setSelectedPlaster(itemValue)}
    >
      {plasters.length > 0 ? (
        plasters.map((plaster) => (
          <Picker.Item
            label={plaster.name}
            value={plaster.id}
            key={plaster.id}
          />
        ))
      ) : (
        <Picker.Item label="Loading..." value={null} />
      )}
    </Picker>
  );
}
