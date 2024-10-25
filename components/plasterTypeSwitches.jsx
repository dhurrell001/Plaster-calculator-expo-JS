import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
/**
 * PlasterTypeSwitch Component
 *
 * This component renders two toggle switches for selecting internal or external plaster types.
 * Each switch controls a state (InternalisEnabled or ExternalisEnabled) that can be toggled on or off.
 *
 * Props:
 * - ExternalisEnabled: Boolean to track the state of the external plaster switch.
 * - setExternalIsEnabled: Function to update the state of the external plaster switch.
 * - InternalisEnabled: Boolean to track the state of the internal plaster switch.
 * - setInternalIsEnabled: Function to update the state of the internal plaster switch.
 */
const PlasterTypeSwitch = ({
  ExternalisEnabled,
  setExternalIsEnabled,
  InternalisEnabled,
  setInternalIsEnabled,
}) => {
  // Function to handle the switch toggle event.
  // It updates the InternalisEnabled state by inverting its current value.
  const toggleInternalSwitch = () =>
    setInternalIsEnabled((previousState) => !previousState);
  const toggleExternalSwitch = () =>
    setExternalIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>INTERNAL</Text>
        <Switch
          trackColor={{ false: "#767577", true: "darkgrey" }}
          thumbColor={InternalisEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleInternalSwitch}
          value={InternalisEnabled}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>EXTERNAL</Text>
        <Switch
          trackColor={{ false: "#767577", true: "" }}
          thumbColor={ExternalisEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleExternalSwitch}
          value={ExternalisEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly", // Evenly space out items
    padding: 10, // Add some padding for better spacing
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10, // Space between switches
  },
  text: {
    fontSize: 17,
    marginRight: 10, // Space between text and switch
    color: "slategrey",
  },
});

export default PlasterTypeSwitch;
