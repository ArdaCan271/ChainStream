import { Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';

const HomeScrollerProductNew = (props) => {
  return (
    <Pressable style={styles.productItemView}>
      <View style={[styles.productImageView, {backgroundColor: props.bgColor}]}>

      </View>
    </Pressable>
  );
}

export default HomeScrollerProductNew;

const styles = StyleSheet.create({
  productItemView:  {
    height: 180, 
    width: 280, 
    marginHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  productImageView: {
    height: 180,
    width: 280,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "darkgray",
    overflow: "hidden",
    padding: 8,
  },

});