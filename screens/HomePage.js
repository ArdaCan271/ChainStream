import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

import HomeScrollerNew from '../components/HomeScrollerNew';
import HomeScrollerProductNew from '../components/HomeScrollerProductNew';

const productData = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "black",
];

const trendingData = [
  //suggest randomized hash codes for colors like light green, light blue, light red, etc.
  "lightgreen",
  "lightblue",
  "lightred",
  "lightyellow",
  "lightorange",
  "lightpurple",
  "lightpink",
  "lightblack",
];

  

const HomePage = () => {

  const renderItem = ({item}) => {
    console.log(item);
    return (
      <HomeScrollerProductNew
      bgColor={item}/>
    );
  }

  return (
    <ScrollView
    contentContainerStyle={{justifyContent: "flex-start", alignItems: "center"}} 
    style={styles.container}
    showsVerticalScrollIndicator={false}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <HomeScrollerNew
      text={"What's New?"}
      productData={productData}
      renderItem={renderItem}/>
      <HomeScrollerNew
      text={"Trending"}
      productData={trendingData}
      renderItem={renderItem}/>
    </ScrollView>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  welcomeText: {
    fontSize: 24,
    color: "black",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  productPlaceholder: {
    width: "90%",
    height: 200,
    margin: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});