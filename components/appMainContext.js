// Import necessary modules from React and other files
import React, { createContext, useState, useEffect } from "react";
import {
  setupDatabase,
  getPlasters,
  clearDatabase,
  getToggledPlasters,
} from "./database"; // Database utility functions
import CalculateSum from "./calculationFunctions.js"; // Calculation utility function

// Create a context to store and share app data
export const AppContext = createContext();

//AppProvider component serves as a context provider to manage and distribute app-wide
// states, such as input values, plaster data, and calculation results.
// @param {Object} children - The wrapped components that will have access to this context.

export const AppProvider = ({ children }) => {
  // State variables for user inputs
  const [lengthInput, setLengthInput] = useState("");
  const [widthInput, setWidthInput] = useState("");
  const [thicknessInput, setThicknessInput] = useState("");
  const [contingencyInput, setContingencyInput] = useState(0);
  const [selectedPlaster, setSelectedPlaster] = useState(null); // Chosen plaster from dropdown
  const [plasterData, setPlasterData] = useState([]); // Array of available plaster data
  const [errorMessage, setErrorMessage] = useState(""); // For displaying validation or error messages

  // State variables for toggle settings for filtering plaster types
  const [InternalisEnabled, setInternalIsEnabled] = useState(true); // Toggle for internal plasters
  const [ExternalisEnabled, setExternalIsEnabled] = useState(true); // Toggle for external plasters

  // State for storing calculation results to be displayed
  const [outputResults, setOutputResults] = useState({
    totalArea: 0,
    plasterNeeded: 0,
    bagsNeeded: 0,
    contingencyNeeded: 0,
    totalPlasterNeeded: 0,
  });

  // useEffect hook to initialize database upon component mount
  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        // await clearDatabase(); // Clear any existing database for fresh setup
        await setupDatabase(); // Set up a new database
        const plasters = await getPlasters(); // Fetch all plasters data
        setPlasterData(plasters); // Set fetched plasters data to state
      } catch (error) {
        setErrorMessage("Error loading database"); // Display error if database fails to load
        console.error("Database error:", error);
      }
    };
    initializeDatabase(); // Call the database initialization function
  }, []);

  // Fetches plaster data based on internal/external toggle states whenever they change
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getToggledPlasters(
          InternalisEnabled,
          ExternalisEnabled
        );
        setPlasterData(data); // Update plasterData state based on toggles
      } catch (error) {
        setErrorMessage(error.message); // Set an error message if fetching fails
      }
    };
    fetchData(); // Invoke the function to fetch data
  }, [InternalisEnabled, ExternalisEnabled]); // Dependency array to rerun on toggle state changes

  /**
   * Validates user inputs and triggers calculations by invoking CalculateSum.
   * Results are updated in the outputResults state.
   */
  const handleCalculation = () => {
    const length = parseFloat(lengthInput); // Parse length input to float
    const width = parseFloat(widthInput); // Parse width input to float
    const thickness = parseFloat(thicknessInput); // Parse thickness input to float
    const contingency = parseFloat(contingencyInput); // Parse contingency input to float

    // Input validation checks
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

    // Call CalculateSum with parsed values and callback functions for setting output results
    CalculateSum(
      length,
      width,
      thickness,
      selectedPlaster,
      (plasterNeeded) =>
        setOutputResults((prev) => ({ ...prev, plasterNeeded })), // Set plaster needed
      (bagsNeeded) => setOutputResults((prev) => ({ ...prev, bagsNeeded })), // Set bags needed
      contingency,
      setContingencyInput,
      (contingencyNeeded) =>
        setOutputResults((prev) => ({ ...prev, contingencyNeeded })), // Set contingency needed
      (totalPlasterNeeded) =>
        setOutputResults((prev) => ({ ...prev, totalPlasterNeeded })), // Set total plaster needed
      (totalArea) => setOutputResults((prev) => ({ ...prev, totalArea })) // Set total area
    );

    setErrorMessage(""); // Clear any previous error message
  };

  return (
    <AppContext.Provider
      value={{
        lengthInput,
        setLengthInput,
        widthInput,
        setWidthInput,
        thicknessInput,
        setThicknessInput,
        contingencyInput,
        setContingencyInput,
        selectedPlaster,
        setSelectedPlaster,
        plasterData,
        errorMessage,
        InternalisEnabled,
        setInternalIsEnabled,
        ExternalisEnabled,
        setExternalIsEnabled,
        handleCalculation,
        outputResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
