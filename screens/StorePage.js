import React from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';


const StorePage = () => {

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.testText}>{item}</Text>
    </View>
  );

  return (
    <FlatList
    data={data}
    keyExtractor={(item, index) => index.toString()}
    renderItem={renderItem}
    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}
    numColumns={2}
  />
  );
}

export default StorePage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: 165,
    height: 220,
    backgroundColor: "white",
    marginVertical: 18,
    marginHorizontal: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  testText: {
    fontSize: 40,
  }
});