import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

import HorizontalScroller from '../components/HorizontalScroller';
import HorizontalScrollerItem from '../components/HorizontalScrollerItem';
import Advert from '../components/Advert';

import Ionicons from "react-native-vector-icons/Ionicons";

const whatsNewData = [
  { id: 4, bgColor: "#B0E0E6", height: getRandomNumber(120, 180), width: getRandomNumber(180, 280) },
  { id: 5, bgColor: "#B19CD9", height: getRandomNumber(120, 180), width: getRandomNumber(180, 280) },
  { id: 1, bgColor: "#E6E6FA", height: getRandomNumber(120, 180), width: getRandomNumber(180, 280) },
  { id: 3, bgColor: "#E1BEE7", height: getRandomNumber(120, 180), width: getRandomNumber(180, 280) },
  { id: 6, bgColor: "#FFCDD2", height: getRandomNumber(120, 180), width: getRandomNumber(180, 280) },
  { id: 2, bgColor: "#C5CBE1", height: getRandomNumber(120, 180), width: getRandomNumber(180, 280) },
];

const trendingNowData = [
  { id: 1, bgColor: "#E6E6FA", height: getRandomNumber(120, 180), width: getRandomNumber(180, 280) },
  { id: 3, bgColor: "#E1BEE7", height: getRandomNumber(120, 180), width: getRandomNumber(180, 280) },
  { id: 2, bgColor: "#C5CBE1", height: getRandomNumber(120, 180), width: getRandomNumber(180, 280) },
  { id: 4, bgColor: "#B0E0E6", height: getRandomNumber(120, 180), width: getRandomNumber(180, 280) },
  { id: 5, bgColor: "#B19CD9", height: getRandomNumber(120, 180), width: getRandomNumber(180, 280) },
  { id: 6, bgColor: "#FFCDD2", height: getRandomNumber(120, 180), width: getRandomNumber(180, 280) },
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const HomePage = () => {

  const renderItem = ({item}) => {
    return (
      <HorizontalScrollerItem
      bgColor={item.bgColor}
      width={item.width}
      height={item.height}/>
    );
  }

  return (
    <ScrollView
    contentContainerStyle={{justifyContent: "flex-start", alignItems: "center"}} 
    style={styles.container}
    showsVerticalScrollIndicator={false}>
      <Text style={styles.welcomeText}>Welcome, Username123!</Text>
      <HorizontalScroller
      text={"What's New?"}
      productData={whatsNewData}
      renderItem={renderItem}/>
      <Advert height={130} bgColor={"#A9B7C6"}/>
      <HorizontalScroller
      text={"Trending Now"}
      productData={trendingNowData}
      renderItem={renderItem}/>
      <Advert height={110} bgColor={"#8470A1"}/>
      <Advert height={160} bgColor={"#FFA07A"}/>
      <Advert height={130} bgColor={"#FFC0CB"}/>
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
  headerView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
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