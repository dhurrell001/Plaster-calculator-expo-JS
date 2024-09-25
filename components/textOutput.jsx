import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";

function TextOutput({ sum }) {
  return (
    <View>
      <Text>{sum}</Text>
    </View>
  );
}

export default TextOutput;
