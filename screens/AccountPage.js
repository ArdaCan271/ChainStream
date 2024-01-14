import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const AccountPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>My Account</Text>
        <Ionicons name="notifications-outline" size={35} color="#482f99" style={{position: "absolute", top: 10, right: 10}}/>
      </View>
      <View style={styles.centerView}>
        <View style={styles.profilePictureCircle}>
          <Ionicons name="person-sharp" size={130} color="lightgray" style={{marginTop: 18}}/>
        </View>
        <Text style={styles.usernameText}>Username123</Text>
        <View style={styles.optionButton}>
          <Ionicons name="settings-outline" size={25} color="white" style={{marginRight: 10}}/>
          <Text style={styles.optionText}>Account Settings</Text>
          <Ionicons name="chevron-forward-outline" size={25} color="white" style={{marginLeft: "auto", marginRight: 10}}/>
        </View>
        <View style={styles.optionButton}>
          <Ionicons name="wallet-outline" size={25} color="white" style={{marginRight: 10}}/>
          <Text style={styles.optionText}>My Wallet</Text>
          <Ionicons name="chevron-forward-outline" size={25} color="white" style={{marginLeft: "auto", marginRight: 10}}/>
        </View>
        <View style={styles.optionButton}>
          <MaterialCommunityIcons name="gift-open-outline" size={25} color="white" style={{marginRight: 10}}/>
          <Text style={styles.optionText}>Special Offers</Text>
          <Ionicons name="chevron-forward-outline" size={25} color="white" style={{marginLeft: "auto", marginRight: 10}}/>
        </View>
        <View style={styles.optionButton}>
          <Ionicons name="diamond-outline" size={25} color="white" style={{marginRight: 10}}/>
          <Text style={styles.optionText}>ChainStream Premium</Text>
          <Ionicons name="chevron-forward-outline" size={25} color="white" style={{marginLeft: "auto", marginRight: 10}}/>
        </View>
        <View style={styles.optionButton}>
          <Ionicons name="receipt-outline" size={25} color="white" style={{marginRight: 10}}/>
          <Text style={styles.optionText}>Transaction History</Text>
          <Ionicons name="chevron-forward-outline" size={25} color="white" style={{marginLeft: "auto", marginRight: 10}}/>
        </View>
        <View style={styles.optionButton}>
          <Ionicons name="options-outline" size={25} color="white" style={{marginRight: 10}}/>
          <Text style={styles.optionText}>App Options</Text>
          <Ionicons name="chevron-forward-outline" size={25} color="white" style={{marginLeft: "auto", marginRight: 10}}/>
        </View>
        <View style={[styles.optionButton, {borderBottomWidth: 0}]}>
          <MaterialCommunityIcons name="headset" size={25} color="white" style={{marginRight: 10}}/>
          <Text style={styles.optionText}>Customer Service</Text>
          <Ionicons name="chevron-forward-outline" size={25} color="white" style={{marginLeft: "auto", marginRight: 10}}/>
        </View>
      </View>
    </View>
  );
}

export default AccountPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 18,
    color: "#482f99",
    marginTop: 10,
  },
  centerView: {
    height: "70%",
    width: "80%",
    borderRadius: 25,
    backgroundColor: "#bcaae3",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "20%",
    elevation: 5,
  },
  profilePictureCircle: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: "white",
    borderWidth: 5,
    marginTop: -60,
    borderColor: "#6e5fdd",
    elevation: 7,
    overflow: "hidden",
  },
  usernameText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    marginTop: 0,
  },
  optionButton: {
    height: 42,
    width: "88%",
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor : "#8782ba",
    marginTop: 5,
  },
  optionText: {
    fontSize: 18,
    color: "white",
  },
});