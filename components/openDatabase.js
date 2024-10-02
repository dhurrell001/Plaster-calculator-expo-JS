import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset"; // Import Asset from expo-asset

export async function openDatabase() {
  const dbFolderPath = `${FileSystem.documentDirectory}SQLite`;
  const dbFilePath = `${dbFolderPath}/PlasterDatabase.sqlite`;

  console.log("Checking if database exists at path:", dbFilePath);

  // Check if the database file already exists
  const { exists } = await FileSystem.getInfoAsync(dbFilePath);
  if (exists) {
    console.log("Database already exists at", dbFilePath);
  } else {
    console.log("Database does not exist. Copying from assets...");
    try {
      // Load the database from assets and copy it to the document directory
      const asset = await Asset.fromModule(
        require("../assets/PlasterDatabase.sqlite")
      ).downloadAsync();

      console.log("Asset downloaded:", asset.localUri);

      // Create folder if it doesn't exist
      await FileSystem.makeDirectoryAsync(dbFolderPath, {
        intermediates: true,
      });

      console.log("Directory created:", dbFolderPath);

      // Copy the database from the assets folder to the document directory
      await FileSystem.copyAsync({ from: asset.localUri, to: dbFilePath });
      console.log("Database copied successfully to", dbFilePath);
    } catch (error) {
      console.error("Error copying database:", error);
    }
  }

  // Open the database
  const db = await SQLite.openDatabaseAsync(dbFilePath);
  if (db) {
    console.log("Database opened successfully:", db);
  } else {
    console.error("Failed to open the database");
  }

  return db;
}
