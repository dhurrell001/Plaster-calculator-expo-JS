import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Keyboard,
} from "react-native";

function LabeledTextInput({ label, placeholder, value, onChangeText }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType="numeric"
          // onSubmitEditing={Keyboard.dismiss()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 0.1, // Ensure the SafeAreaView takes up the whole screen

    marginBottom: 10,
    marginTop: 10,
  },
  container: {
    marginVertical: 10,
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    // backgroundColor: "purple", // You can adjust this to match your theme
    color: "#333",
  },
  input: {
    height: 30,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
});

export default LabeledTextInput;
