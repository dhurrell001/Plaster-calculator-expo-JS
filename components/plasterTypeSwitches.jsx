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
      <Text>Internal</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={InternalisEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleInternalSwitch}
        value={InternalisEnabled}
        style={styles.switchMargin}
      />
      <Text>External</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={ExternalisEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleExternalSwitch}
        value={ExternalisEnabled}
        style={styles.switchMargin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switchMargin: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default PlasterTypeSwitch;
