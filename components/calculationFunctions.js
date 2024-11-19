import React from "react"; // Import React for functional component creation

// Calculate the total area to be plastered based on length and width in square meters
function calculateArea(length, width) {
  return length * width;
}

// Calculate the required plaster in kilograms without contingency added, based on area, thickness, and plaster's coverage rate
function calculatePlasterNeeded(totalArea, thickness, coverageKGperMMperMetre) {
  return totalArea * (coverageKGperMMperMetre * thickness);
}

// Calculate the contingency amount needed in kilograms based on the plaster needed and a percentage
function calculateContingencyNeeded(plasterNeeded, contingencyPercentage) {
  return plasterNeeded * (contingencyPercentage / 100);
}

// Calculate the number of plaster bags needed, rounded up to the nearest whole bag
function calculateBagsNeeded(plasterNeeded, bagSize) {
  console.log(
    "Inside calculateBagsNeeded function",
    Math.ceil(plasterNeeded / bagSize)
  );
  return Math.ceil(plasterNeeded / bagSize);
}

/**
 * Main calculation function that computes and sets required values for plastering calculations.
 * Takes user inputs, selected plaster details, and setter functions to calculate and update:
 * - Total Area
 * - Plaster Needed
 * - Bags Needed
 * - Contingency Needed
 * - Total Plaster Required
 *
 * @param {string} lengthInput - Length input as a string
 * @param {string} widthInput - Width input as a string
 * @param {string} thicknessInput - Thickness of plaster in mm
 * @param {Object} selectedPlaster - Object containing plaster details (coverage, bag size, etc.)
 * @param {Function} setPlasterNeeded - Setter function for plaster needed
 * @param {Function} setBagsNeeded - Setter function for bags needed
 * @param {string} contingencyInput - User-entered contingency percentage as a string
 * @param {Function} setContingencyInput - Setter function for contingency input
 * @param {Function} setContingencyNeeded - Setter function for contingency needed in kg
 * @param {Function} setTotalPlasterNeeded - Setter function for total plaster needed including contingency
 * @param {Function} setTotalArea - Setter function for the total area
 */
const CalculateSum = (
  lengthInput,
  widthInput,
  thicknessInput,
  selectedPlaster,
  setPlasterNeeded,
  setBagsNeeded,
  contingencyInput,
  setContingencyInput,
  setContingencyNeeded,
  setTotalPlasterNeeded,
  setTotalArea
) => {
  // Parse length and width inputs as floating-point numbers
  const length = parseFloat(lengthInput);
  const width = parseFloat(widthInput);

  // Ensure valid numerical inputs for length and width
  if (!isNaN(length) && !isNaN(width)) {
    // Calculate total area and update via setter
    const totalArea = calculateArea(length, width);
    setTotalArea(totalArea);
    console.log("Inside calculateArea function");
    console.log(`Selected plaster: ${selectedPlaster.plasterName}`);
    console.log(`Selected plaster object: ${JSON.stringify(selectedPlaster)}`);

    // Calculate plaster required (kg) based on total area, thickness, and plaster coverage rate
    const plasterNeeded = calculatePlasterNeeded(
      totalArea,
      thicknessInput,
      selectedPlaster.coveragePerMMperSQM
    );
    setPlasterNeeded(plasterNeeded);
    console.log(`Plaster needed: ${plasterNeeded}`);

    // Calculate contingency and total plaster needed if contingency is specified
    let totalPlasterNeeded = plasterNeeded; // Initialize total plaster for bag calculation
    const contingency = parseFloat(contingencyInput);
    if (!isNaN(contingency)) {
      const contingencyNeeded = calculateContingencyNeeded(
        plasterNeeded,
        contingency
      );
      setContingencyNeeded(contingencyNeeded);
      totalPlasterNeeded = contingencyNeeded + plasterNeeded;
      setTotalPlasterNeeded(totalPlasterNeeded); // Update total plaster including contingency
    }

    // Calculate number of plaster bags required based on total plaster needed and bag size
    const bagsNeeded = calculateBagsNeeded(
      totalPlasterNeeded,
      selectedPlaster.bagSize
    );
    setBagsNeeded(bagsNeeded);
  } else {
    console.log(
      "Invalid input: Please enter numerical values for length and width"
    );
  } // Logs error for non-numeric or invalid input
};

export default CalculateSum;
