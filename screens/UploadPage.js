import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

const UploadPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.uploadArea}>
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <Ionicons name="cloud-upload" size={50} color="#897de3" />
          <Text style={styles.uploadText}>Upload your files</Text>
        </View>
        <Pressable style={styles.uploadButton}>
          <Ionicons name="arrow-up-circle-outline" size={24} color="white" />
          <Text style={{fontSize: 18, fontWeight: "500", marginLeft: -12}}>Upload</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default UploadPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  uploadArea: {
    height: "35%",
    width: "85%",
    backgroundColor: "#ccc1e3",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "20%",
    borderRadius: 15,
  },
  uploadText: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
    color: "#897de3",
  },
  uploadButton: {
    height: 50,
    width: 110,
    backgroundColor: "#655DBB",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});