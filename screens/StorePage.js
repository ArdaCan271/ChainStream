import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StorePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Store Page</Text>
    </View>
  );
}

export default StorePage;

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