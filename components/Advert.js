import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Advert = (props) => {
  return (
    <View style={[styles.container, {height: props.height, backgroundColor: props.bgColor}]}>
      <Text style={styles.advertText}>Advert</Text>
    </View>
  );
}

export default Advert;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 150,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 10,
    padding: 8,
    elevation: 5,
    marginVertical: 10,
  },
  advertText: {
    fontSize: 18,
    color: "white",
    marginBottom: "auto"
  },
  row1: {
    width: 40,
    height: 20,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginBottom: "auto"
  },
  row2: {
    width: "70%",
    height: 10,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginBottom: 9,
  },
  row3: {
    width: "35%",
    height: 10,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginBottom: 8,
  },
});