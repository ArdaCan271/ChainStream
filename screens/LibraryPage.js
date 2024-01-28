import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Searchbox from '../components/Searchbox';
import LibraryProduct from '../components/LibraryComps/LibraryProduct';

const LibraryPage = ({productList}) => {
  
  const renderItem = ({ item }) => (
    <LibraryProduct
    id={item.id} 
    backgroundColor={item.backgroundColor}
    iconColor={item.iconColor}/>
  );


  return (
    <View style={styles.container}>
      <Searchbox placeholder="Search in Library"/>
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

export default LibraryPage;

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