import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';

import StoreProduct from '../components/StoreComps/StoreProduct';
import Searchbox from '../components/Searchbox';

const products = [
  {
    id: 1,
    backgroundColor: "#e2dcef",
    iconColor: "#a9a5d9",
  },
  {
    id: 2,
    backgroundColor: "#efdcdc",
    iconColor: "#d9a5a5",
  },
  {
    id: 3,
    backgroundColor: "#e6efdc",
    iconColor: "#bfd9a5",
  },
  {
    id: 4,
    backgroundColor: "#ddf0f0",
    iconColor: "#a5d9d9",
  },
  {
    id: 5,
    backgroundColor: "#f0e5dd",
    iconColor: "#d9baa5",
  },
  {
    id: 6,
    backgroundColor: "#f0eddd",
    iconColor: "#d9d0a5",
  },
  {
    id: 7,
    backgroundColor: "#f0ddeb",
    iconColor: "#d9a5cb",
  },
];


const StorePage = ({ updateLibraryProductList }) => {
  
  const [productList, setProductList] = useState(products);
  
  const onAddPress = (item) => {

    console.log(`Add Pressed on ${item.id}`);

    const updatedProductList = [...productList];

    updateLibraryProductList(item);

    const indexToRemove = updatedProductList.indexOf(item);

    if (indexToRemove !== -1) {
      updatedProductList.splice(indexToRemove, 1);

      setProductList(updatedProductList);
    }

  }
  
  const renderItem = ({ item }) => (
    <StoreProduct 
    onAddPress={() => onAddPress(item)}
    id={item.id} 
    backgroundColor={item.backgroundColor}
    iconColor={item.iconColor}/>
  );

  return (
    <View style={styles.container}>
      <Searchbox placeholder="Search for Product"/>
      <FlatList
      data={productList}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.productList}
      showsVerticalScrollIndicator={true}
      numColumns={2}
      />
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
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
  },
  productList: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 150,
  },
});