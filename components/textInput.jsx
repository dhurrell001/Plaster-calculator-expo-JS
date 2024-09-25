import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";

function LabeledTextInput({ label, placeholder }) {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={text}
          onChangeText={setText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 0.1, // Ensure the SafeAreaView takes up the whole screen
    // backgroundColor: "purple", // You can adjust this to match your theme
    marginBottom: 5,
    marginTop: 5,
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

    color: "#333",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
});

export default LabeledTextInput;
