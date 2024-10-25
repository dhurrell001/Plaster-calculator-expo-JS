// AppContext.js
import React, { createContext, useState, useEffect } from "react";
import {
  setupDatabase,
  getPlasters,
  clearDatabase,
  getToggledPlasters,
} from "./database";
import CalculateSum from "./calculationFunctions.js";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lengthInput, setLengthInput] = useState("");
  const [widthInput, setWidthInput] = useState("");
  const [thicknessInput, setThicknessInput] = useState("");
  const [contingencyInput, setContingencyInput] = useState(0);
  const [selectedPlaster, setSelectedPlaster] = useState(null);
  const [plasterData, setPlasterData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [InternalisEnabled, setInternalIsEnabled] = useState(true);
  const [ExternalisEnabled, setExternalIsEnabled] = useState(true);

  const [outputResults, setOutputResults] = useState({
    totalArea: 0,
    plasterNeeded: 0,
    bagsNeeded: 0,
    contingencyNeeded: 0,
    totalPlasterNeeded: 0,
  });

  useEffect(() => {
    const initializeDatabase = async () => {
      try {
        await clearDatabase();
        await setupDatabase();
        const plasters = await getPlasters();
        setPlasterData(plasters);
      } catch (error) {
        setErrorMessage("Error loading database");
        console.error("Database error:", error);
      }
    };
    initializeDatabase();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getToggledPlasters(
          InternalisEnabled,
          ExternalisEnabled
        );
        setPlasterData(data);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };
    fetchData();
  }, [InternalisEnabled, ExternalisEnabled]);

  const handleCalculation = () => {
    const length = parseFloat(lengthInput);
    const width = parseFloat(widthInput);
    const thickness = parseFloat(thicknessInput);
    const contingency = parseFloat(contingencyInput);

    // Validation checks
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

    CalculateSum(
      length,
      width,
      thickness,
      selectedPlaster,
      (plasterNeeded) =>
        setOutputResults((prev) => ({ ...prev, plasterNeeded })),
      (bagsNeeded) => setOutputResults((prev) => ({ ...prev, bagsNeeded })),
      contingency,
      setContingencyInput,
      (contingencyNeeded) =>
        setOutputResults((prev) => ({ ...prev, contingencyNeeded })),
      (totalPlasterNeeded) =>
        setOutputResults((prev) => ({ ...prev, totalPlasterNeeded })),
      (totalArea) => setOutputResults((prev) => ({ ...prev, totalArea }))
    );

    setErrorMessage("");
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
