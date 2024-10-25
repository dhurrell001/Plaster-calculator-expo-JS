// appMain.js
import React, { useContext } from "react";
import { AppContext } from "./appMainContext";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import PlasterTypeSwitch from "./plasterTypeSwitches";
import PlasterDropdown from "./dropdownPicker";
import InputDisplayArea from "./inputDisplayArea";
import OutputDisplayArea from "./outputDisplayArea";
import HorizontalRule from "./horizontalRule";
import { StatusBar } from "expo-status-bar";

const AppMain = () => {
  const {
    lengthInput,
    setLengthInput,
    widthInput,
    setWidthInput,
    thicknessInput,
    setThicknessInput,
    handleCalculation,
    selectedPlaster,
    setSelectedPlaster,
    errorMessage,
    outputResults,
    InternalisEnabled,
    ExternalisEnabled,
    setInternalIsEnabled,
    setExternalIsEnabled,
    plasterData,
    contingencyInput,
    setContingencyInput,
  } = useContext(AppContext);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>PLASTER CALCULATOR</Text>
        <HorizontalRule />
        <PlasterTypeSwitch
          InternalisEnabled={InternalisEnabled}
          ExternalisEnabled={ExternalisEnabled}
          setInternalIsEnabled={setInternalIsEnabled}
          setExternalIsEnabled={setExternalIsEnabled}
        />
        <PlasterDropdown
          selectedPlaster={selectedPlaster}
          setSelectedPlaster={setSelectedPlaster}
          plasters={plasterData}
        />
        {errorMessage ? (
          <Text style={{ color: "red" }}>{errorMessage}</Text>
        ) : null}
        <InputDisplayArea
          lengthInput={lengthInput}
          widthInput={widthInput}
          thicknessInput={thicknessInput}
          setLengthInput={setLengthInput}
          setWidthInput={setWidthInput}
          setThicknessInput={setThicknessInput}
          contingencyInput={contingencyInput}
          setContingencyInput={setContingencyInput}
          calculateSum={handleCalculation}
        />
        <Text style={{ color: "slategrey", fontSize: 27 }}>RESULTS</Text>
        <OutputDisplayArea
          label={"Area Total:"}
          sum={outputResults.totalArea}
          plasterNeeded={outputResults.plasterNeeded}
          bagsNeeded={outputResults.bagsNeeded}
          contingencyNeeded={outputResults.contingencyNeeded}
          totalPlasterNeeded={outputResults.totalPlasterNeeded}
        />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "linen",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  title: {
    fontSize: 27,
    paddingTop: 10,
    marginBottom: 10,
    color: "slategrey",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "linen",
    width: "100%",
  },
});

export default AppMain;

// import React from "react";
// import { View, Text, ScrollView, StyleSheet } from "react-native";
// import PlasterTypeSwitch from "./plasterTypeSwitches";
// import PlasterDropdown from "./dropdownPicker";
// import InputDisplayArea from "./inputDisplayArea";
// import OutputDisplayArea from "./outputDisplayArea";
// import HorizontalRule from "./horizontalRule";
// import { StatusBar } from "expo-status-bar";
// import AboutPage from "./aboutPage";

// const AppMain = ({
//   lengthInput,
//   widthInput,
//   thicknessInput,
//   setLengthInput,
//   setWidthInput,
//   setThicknessInput,
//   handleCalculation,
//   selectedPlaster,
//   setSelectedPlaster,
//   errorMessage,
//   totalArea,
//   plasterNeeded,
//   bagsNeeded,
//   contingencyNeeded,
//   totalPlasterNeeded,
//   InternalisEnabled,
//   ExternalisEnabled,
//   setInternalIsEnabled,
//   setExternalIsEnabled,
//   plasterData,
//   contingencyInput,
//   setContingencyInput,
// }) => {
//   return (
//     <ScrollView contentContainerStyle={styles.scrollViewContent}>
//       <View style={styles.container}>
//         <Text style={styles.title}>PLASTER CALCULATOR</Text>
//         <HorizontalRule />
//         <PlasterTypeSwitch
//           InternalisEnabled={InternalisEnabled}
//           ExternalisEnabled={ExternalisEnabled}
//           setInternalIsEnabled={setInternalIsEnabled}
//           setExternalIsEnabled={setExternalIsEnabled}
//         />
//         <PlasterDropdown
//           selectedPlaster={selectedPlaster}
//           setSelectedPlaster={setSelectedPlaster}
//           plasters={plasterData} // Pass plaster data as a prop
//         />
//         {/* <DisplayContainer data={data} /> */}
//         {errorMessage ? (
//           <Text style={{ color: "red" }}>{errorMessage}</Text>
//         ) : null}
//         <InputDisplayArea
//           lengthInput={lengthInput}
//           widthInput={widthInput}
//           thicknessInput={thicknessInput}
//           setLengthInput={setLengthInput}
//           setWidthInput={setWidthInput}
//           setThicknessInput={setThicknessInput}
//           contingencyInput={contingencyInput}
//           setContingencyInput={setContingencyInput}
//           calculateSum={handleCalculation} //passsing the function to display onClick
//         />
//         {/* <HorizontalRule /> */}
//         <Text style={{ color: "slategrey", fontSize: 27 }}>RESULTS</Text>
//         {/* <HorizontalRule /> */}
//         <OutputDisplayArea
//           label={"Area Total :"}
//           sum={totalArea}
//           plasterNeeded={plasterNeeded}
//           bagsNeeded={bagsNeeded}
//           contingencyNeeded={contingencyNeeded}
//           totalPlasterNeeded={totalPlasterNeeded}
//         ></OutputDisplayArea>
//         <StatusBar style="auto" />
//       </View>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "linen",
//     alignItems: "center",
//     marginTop: 30,
//     width: "100%",
//   },
//   title: {
//     fontSize: 27,
//     paddingTop: 10,
//     marginBottom: 10,
//     color: "slategrey",
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingVertical: 30,
//     backgroundColor: "linen",
//     width: "100%",
//   },
// });

// export default AppMain;
