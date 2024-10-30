import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const InstructionPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.header}>How to Use This Calculator</Text>
        <Text style={styles.paragraph}>
          Follow these steps to get the best results from the Plaster
          Calculator:
        </Text>

        <Text style={styles.subHeader}>
          Step 1: Choose internal or external plasters
        </Text>
        <Text style={styles.paragraph}>
          Use Internal and external toggle switches to choose the type of
          plaster. Both internal and external plasters will be displayed by
          default.
        </Text>

        <Text style={styles.subHeader}>Step 2: Select Plaster Type</Text>
        <Text style={styles.paragraph}>
          Choose from the dropdown menu the type of plaster you wish to
          calculate
        </Text>
        <Text style={styles.subHeader}>Step 3: Enter measurements</Text>

        <Text style={styles.subHeader}>Inputs:</Text>
        <View style={styles.bulletContainer}>
          <Text style={styles.bullet}>
            • Enter length and width in metres. Part metre measurements are
            accepted (e.g 1.2 or 3.7)
          </Text>
          <Text style={styles.bullet}>
            • Enter the thickness you wish to apply the plaster in millimetres
          </Text>
          <Text style={styles.bullet}>
            • Enter how much contigency you wish to allow for in percentage. 0
            is accepted for no contingency allowance.
          </Text>
          <Text style={styles.bullet}>
            • Enter how much contigency you wish to allow for in percentage. 0
            is accepted for no contingency allowance.
          </Text>
        </View>
        <Text style={styles.subHeader}>Step 4: Calculate plaster needed</Text>
        <Text style={styles.paragraph}>
          Press the calculate button to calculate the plaster required for your
          project
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    flex: 1,
    backgroundColor: "linen",
    alignItems: "center",
  },
  textContainer: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    width: "90%", // Keeps it slightly smaller than the screen width
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Adds shadow for Android
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginTop: 10,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 22,
    color: "#666",
    marginBottom: 10,
  },
  bulletContainer: {
    marginTop: 10,
    paddingLeft: 15,
  },
  bullet: {
    fontSize: 18,
    lineHeight: 22,
    color: "#666",
    marginBottom: 10,
  },
});

export default InstructionPage;
