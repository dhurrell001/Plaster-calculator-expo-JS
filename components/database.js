import * as SQLite from "expo-sqlite";

// Open the database asynchronously
const dbPromise = SQLite.openDatabaseAsync("PlasterDatabase.db");

// Function to create the table and insert initial data if necessary
export const setupDatabase = async () => {
  try {
    // Open the database
    const db = await dbPromise;
    console.log("Database opened successfully: PlasterDatabase.db");

    // Create table if it doesn't exist
    console.log("Creating 'plasters' table if not exists...");
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS plasters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        plasterName TEXT,
        coveragePerMMperSQM FLOAT,
        bagSize INTEGER,
        plasterType TEXT
      );`
    );
    console.log("'plasters' table creation or verification complete.");

    // Check if records already exist, and insert initial data if none
    const result = await db.getFirstAsync(
      "SELECT COUNT(*) AS count FROM plasters;"
    );
    console.log(`db length ${result.length}`);
    if (result.count === 0) {
      console.log("No records found, inserting initial plaster data...");
      await db.execAsync(
        `INSERT INTO plasters (plasterName, coveragePerMMperSQM, bagSize, plasterType)
        VALUES 
        ('British Gypsum Multi-Finish', 1.25, 25, 'INTERNAL'),
        ('British Gypsum Hardwall', 3, 25, 'INTERNAL'),
        ('British Gypsum Bonding', 3, 25, 'INTERNAL'),
        ('K-Rend Silicone K1',1.6,25,'EXTERNAL'),
        ('k-Rend HP12 Base',1.8,25,'EXTERNAL'),
        ('K-Rend Silicone TC10',1.8,25,'EXTERNAL'),
        ('K-Rend Silicone TC15',2.5,25,'EXTERNAL'),
        ('K-Rend Silicone TC30',5,25,'EXTERNAL')`
      );
      console.log("Initial plaster data inserted.");
    } else {
      console.log("Records already exist in the 'plasters' table.");
    }
  } catch (error) {
    console.error("Error setting up database: ", error);
  }
};

// Function to fetch plaster records from the database
export const getPlasters = async (callback) => {
  try {
    console.log("Fetching plasters...");
    const db = await dbPromise;
    const result = await db.getAllAsync("SELECT * FROM plasters;");
    callback(result);
  } catch (error) {
    console.error("Error fetching data from database: ", error);
  }
};
export get
/**
 * Deletes a specific plaster record by its unique ID.
 * This function is asynchronous and executes a SQL query to delete a plaster based on its ID.
 *
 * @param {number} id - The unique identifier of the plaster record to delete.
 */
export const deletePlasterById = async (id) => {
  try {
    // Await the resolution of dbPromise to get a reference to the database
    const db = await dbPromise;

    // Execute a SQL command to delete a plaster record by its ID
    await db.execAsync("DELETE FROM plasters WHERE id = ?;", [id]); // Use parameterized query for security
    console.log(`Plaster with ID ${id} deleted.`); // Log the successful deletion
  } catch (error) {
    // Log any errors encountered while deleting the plaster by ID
    console.error("Error deleting plaster by ID: ", error);
  }
};
export const getPlasterByName = async (name) => {
  try {
    // Await the resolution of dbPromise to get a reference to the database
    const db = await dbPromise;

    // Execute a SQL command to delete a plaster record by its ID
    const result = await db.getFirstAsync(
      "SELECT * FROM plasters WHERE plasterName = ?;",
      [name]
    ); // Use parameterized query for security
    console.log(`Plaster with name ${name} recovered.`); // Log the successful deletion
    console.log(`get plaster by name result :${result}`);
    return result;
  } catch (error) {
    // Log any errors encountered while deleting the plaster by ID
    console.error("Error recovering plaster by ID: ", error);
  }
};
/**
 * Deletes all plaster records from the database.
 * This function is asynchronous and executes a SQL query to delete all records in the plasters table.
 */
export const deleteAllPlasters = async () => {
  try {
    // Await the resolution of dbPromise to get a reference to the database
    const db = await dbPromise;

    // Execute a SQL command to delete all records from the plasters table
    await db.execAsync("DELETE FROM plasters;"); // Directly delete all records
    console.log("All plaster records deleted."); // Log the successful deletion
  } catch (error) {
    // Log any errors encountered while deleting all plaster records
    console.error("Error deleting all plaster records: ", error);
  }
};

// Function to clear all plaster records from the database
export const clearDatabase = async () => {
  try {
    const db = await dbPromise;
    await db.execAsync("DELETE FROM plasters;");
    console.log("All records cleared from the 'plasters' table.");
  } catch (error) {
    console.error("Error clearing database: ", error);
  }
};
