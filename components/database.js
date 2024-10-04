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
    if (result.count === 0) {
      console.log("No records found, inserting initial plaster data...");
      await db.execAsync(
        `INSERT INTO plasters (plasterName, coveragePerMMperSQM, bagSize, plasterType)
        VALUES 
        ('Multi-Finish', 2, 25, 'INTERNAL'),
        ('Hardwall', 3, 25, 'INTERNAL');`
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
    const db = await dbPromise;
    const result = await db.getAllAsync("SELECT * FROM plasters;");
    callback(result);
  } catch (error) {
    console.error("Error fetching data from database: ", error);
  }
};
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
// Other functions remain unchanged...
