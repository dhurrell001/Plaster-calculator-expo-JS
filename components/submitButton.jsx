import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function SubmitButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      <Button title={title} onPress={onPress}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
});
export default SubmitButton;
