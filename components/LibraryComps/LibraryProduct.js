import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const LibraryProduct = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.productDesc}>
        <View style={[styles.imageContainer, {backgroundColor: props.backgroundColor}]}>
          <Ionicons name="image" size={80} color={props.iconColor} />
        </View>
        <Text numberOfLines={2} style={styles.productText}>Product Name Test #{props.id}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 165,
    height: 180,
    backgroundColor: "white",
    marginVertical: 18,
    marginHorizontal: 18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#655DBB",
    elevation : 2,
    overflow: "hidden",
  },
  productDesc: {
    width: "100%",
    height: 176,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 10,
  },
  imageContainer: {
    height: 115,
    width: 145,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2dcef",
    borderWidth: 2,
    borderColor: "#655DBB",
    borderRadius: 10,
  },
  productText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 4,
    color: "black",
    alignSelf: "flex-start",
    marginLeft: 6,
    marginRight: 4,
    lineHeight: 18,
  },
  productAddButton: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#655DBB",
  },
  productAddButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default LibraryProduct;