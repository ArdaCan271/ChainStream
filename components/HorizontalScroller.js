import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HorizontalScroller = (props) => {
  return (
    <View style={styles.productsView}>
      <View style={styles.productsTextContainer}>
        <Text style={styles.productsText}>{props.text}</Text>
      </View>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={props.productData}
      renderItem={props.renderItem}
      contentContainerStyle={{paddingBottom: 5}}/>
    </View>
  );
}

export default HorizontalScroller;

const styles = StyleSheet.create({
  productsView: {
    width: "100%",
  },
  productsTextContainer: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
    paddingHorizontal: 10,
  },
  productsText:{
    color: "#3a3a3a",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 6
  },
});