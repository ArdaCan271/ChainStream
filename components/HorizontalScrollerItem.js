import { Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';

const HorizontalScrollerItem = (props) => {
  return (
    <View style={[styles.productImageView, {backgroundColor: props.bgColor, height: props.height, width: props.width}]}>
      <View style={styles.row1}></View>
      <View style={styles.row2}></View>
      <View style={styles.row3}></View>
    </View>
  );
}

export default HorizontalScrollerItem;

const styles = StyleSheet.create({
  productImageView: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 10,
    marginHorizontal: 7,
    backgroundColor: "darkgray",
    overflow: "hidden",
    padding: 8,
    elevation: 4,
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