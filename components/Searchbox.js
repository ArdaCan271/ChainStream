import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Searchbox = (props) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={25} color="#ccc1e3" style={{marginLeft: 10}}/>
      <TextInput
        style={{height: 50, width: "80%", marginLeft: 5, fontSize: 18, color: "black"}}
        placeholder={props.placeholder}
        placeholderTextColor="#ccc1e3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "88%",
    height: 50,
    borderRadius: 6,
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 5,
  }
});

export default Searchbox;