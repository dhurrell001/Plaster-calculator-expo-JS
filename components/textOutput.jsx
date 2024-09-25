import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, StyleSheet } from "react-native";

function TextOutput({ result }) {
  return (
    <View>
      <Text>{result.content}</Text>
    </View>
  );
}
