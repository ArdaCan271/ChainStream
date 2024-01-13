// write basic rnfes snippet and then add ; where needed
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Profile Page</Text>
    </View>
  );
}

export default ProfilePage;

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