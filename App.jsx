import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './screens/HomePage';
import StorePage from './screens/StorePage';
import LibraryPage from './screens/LibraryPage';
import AccountPage from './screens/AccountPage';
import UploadPage from './screens/UploadPage';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {

  const [libraryProductList, setLibraryProductList] = useState([]);

  const updateLibraryProductList = (productId) => {
    // Update the libraryProductList state with the new product ID
    setLibraryProductList((prevList) => [...prevList, productId]);
    console.log("Library Product List: ", libraryProductList);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Library") {
            iconName = focused ? "library" : "library-outline";
          } else if (route.name === "Store") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Upload") {
            iconName = focused ? "cloud-upload" : "cloud-upload-outline";
          }
          return <Icon name={iconName} size={28} color={color}/>
          },
        tabBarActiveTintColor: "#655DBB",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {marginTop: -5, marginBottom: 4},
        tabBarStyle: {height: 53},
        headerShown: false,
        tabBarButton: (props) => <Pressable android_disableSound android_ripple={{color: "#BFACE2", radius: 41}} {...props}/>
        })}>
        <Tab.Screen name="Home" component={HomePage}/>
        <Tab.Screen name="Store">
          {() => <StorePage updateLibraryProductList={updateLibraryProductList}/>}
        </Tab.Screen>
        <Tab.Screen name="Upload" component={UploadPage}/>
        <Tab.Screen name="Library">
          {() => <LibraryPage productList={libraryProductList} />}
        </Tab.Screen>
        <Tab.Screen name="Account" component={AccountPage}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    color: "black",
  }
});