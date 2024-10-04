import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const DisplayContainer = ({ data = [] }) => {
  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        <View>
          {/* Use FlatList for better performance when rendering lists */}
          <FlatList
            data={data} // Pass the data to the FlatList
            keyExtractor={(item) => item.id.toString()} // Unique key for each item
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.plasterName}</Text>
                <Text style={styles.itemText}>
                  Coverage: {item.coveragePerMMperSQM} m²/mm
                </Text>
                <Text style={styles.itemText}>Bag Size: {item.bagSize} kg</Text>
                <Text style={styles.itemText}>Type: {item.plasterType}</Text>
              </View>
            )}
          />
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
