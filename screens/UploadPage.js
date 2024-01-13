//use rnfes but put semicolons at the end of the line

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UploadPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Upload Page</Text>
    </View>
  );
}

export default UploadPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    color: "black",
  }
});