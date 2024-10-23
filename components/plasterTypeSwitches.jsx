import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const PlasterTypeSwitch = () => {
  const [InternalisEnabled, setInternalIsEnabled] = useState(false);
  const [ExternalisEnabled, setExternalIsEnabled] = useState(false);

  const toggleInternalSwitch = () =>
    setInternalIsEnabled((previousState) => !previousState);
  const toggleExternalSwitch = () =>
    setExternalIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Internal</Text>
        <Switch
          trackColor={{ false: "#767577", true: "darkgrey" }}
          thumbColor={InternalisEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleInternalSwitch}
          value={InternalisEnabled}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>External</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
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
  },
});

export default PlasterTypeSwitch;
