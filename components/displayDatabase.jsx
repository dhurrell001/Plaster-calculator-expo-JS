import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DisplayContainer = ({ data = [] }) => {
  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <View>
          <Text>Data found</Text>
        </View>
      ) : (
        <View>
          <Text>No data found</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});

export default DisplayContainer;
