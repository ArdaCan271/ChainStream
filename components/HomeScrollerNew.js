import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeScrollerNew = (props) => {
  return (
    <View style={styles.productsView}>
      <View style={styles.productsTextContainer}>
        <Text style={styles.productsText}>{props.text}</Text>
      </View>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={props.productData}
      renderItem={props.renderItem}/>
    </View>
  );
}

export default HomeScrollerNew;

const styles = StyleSheet.create({
  productsView: {
    width: "100%",
    height: 250,
  },
  productsTextContainer: {
    width: "100%",
    height: 58,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
    paddingHorizontal: 10,
  },
  productsText:{
    color: "#3a3a3a",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 6
  },
});