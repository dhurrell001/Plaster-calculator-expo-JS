import React from "react"; // React import for functional component creation
// total area, thickness, contingency, plaster object
function calculateArea(length, width) {
  return length * width;
}
function calculatePlasterNeeded(totalArea, thickness, coverageKGperMMperMetre) {
  return totalArea * (coverageKGperMMperMetre * thickness);
}
function calculateContingencyNeeded(plasterNeeded, contingencyPercentage) {
  return plasterNeeded * (contingencyPercentage / 100);
}
function calculateBagsNeeded(plasterNeeded, bagSize) {
  console.log("inside bags function", Math.ceil(plasterNeeded / bagSize));
  return Math.ceil(plasterNeeded / bagSize);
}

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
  const length = parseFloat(lengthInput); // Convert length input to float
  const width = parseFloat(widthInput); // Convert width input to float
  if (!isNaN(length) && !isNaN(width)) {
    const totalArea = calculateArea(length, width);
    setTotalArea(totalArea);
    console.log("inside calculate area func");
    console.log(
      `plaster selected inside calc func ${selectedPlaster.plasterName}`
    );
    console.log(`Selected plaster object: ${JSON.stringify(selectedPlaster)}`);

    // calculate plaster needed in kg
    const plasterNeeded = calculatePlasterNeeded(
      totalArea,
      thicknessInput,
      selectedPlaster.coveragePerMMperSQM
    );
    setPlasterNeeded(plasterNeeded);
    console.log(`plaster needed ${plasterNeeded}`);

    // Calculate contingency needed
    let totalPlasterNeeded = plasterNeeded; // sets total plaster needed for bagsNeeded call below, outside of if statement scope
    const contingency = parseFloat(contingencyInput);
    if (!isNaN(contingency)) {
      const contingencyNeeded = calculateContingencyNeeded(
        plasterNeeded,
        contingency
      );
      setContingencyNeeded(contingencyNeeded);
      totalPlasterNeeded = contingencyNeeded + plasterNeeded;
      setTotalPlasterNeeded(totalPlasterNeeded);
    }
    // calculate the amount of bags needed
    const bagsNeeded = calculateBagsNeeded(
      totalPlasterNeeded,
      selectedPlaster.bagSize
    );
    setBagsNeeded(bagsNeeded);
  } else {
    console.log("Please enter valid numbers");
  } // Error message for invalid inputs
};

export default CalculateSum;
