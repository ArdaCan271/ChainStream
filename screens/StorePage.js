import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';

import StoreProduct from '../components/StoreComps/StoreProduct';
import Searchbox from '../components/Searchbox';

import "@ethersproject/shims";
import { ethers } from "ethers";
import ChainStreamContractJson from "../build/contracts/ChainStreamContract.json";

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
  const ChainStreamContractABI = ChainStreamContractJson.abi;
  const ChainStreamContractAddress = "0x3D2E40F0008c911849Ff327B7724c855379f4Ae5";
  
  const ganacheEndpoint = "http://192.168.5.112:7545";
  const provider = new ethers.providers.JsonRpcProvider(ganacheEndpoint);
  const signer = provider.getSigner();
  const specificPrivateKey = "0xf0ca29eb590f29e8fb75e9fd06c4996aeebefa5439da54d6a6e3f10e6426ed6d";
  const specificAccount = new ethers.Wallet(specificPrivateKey, provider);
  const contract = new ethers.Contract(ChainStreamContractAddress, ChainStreamContractABI, specificAccount);


  // const onTestPress = async () => {
  //   try {
  //     const amountToSend = ethers.utils.parseEther("1000000000");
  //     const receiverAddress = "0x02ac676719e72dCcc5626ce468Cb143a768829d0";

  //     console.log("Sending Eth...");
  //     const transaction = await contract.sendEth(amountToSend, receiverAddress);
  //     console.log("Transaction:", transaction);

  //     await transaction.wait();
  //     console.log('Eth sent successfully!');
  //   } catch (error) {
  //     console.log("Error sending Eth:", error);
  //   }
  // };
  
  const [productList, setProductList] = useState(products);

  const onAddPress = async (item) => {
    const updatedProductList = [...productList];
    updateLibraryProductList(item);
    const indexToRemove = updatedProductList.indexOf(item);
    if (indexToRemove !== -1) {
      updatedProductList.splice(indexToRemove, 1);
      setProductList(updatedProductList);
    }
    try {
      const amountToSend = ethers.utils.parseEther("10");
      const receiverAddress = "0x02ac676719e72dCcc5626ce468Cb143a768829d0";

      console.log("Sending Eth...");
      const transaction = await contract.sendEth(amountToSend, receiverAddress);
      console.log("Transaction:", transaction);

      await transaction.wait();
      console.log('Eth sent successfully!');
    } catch (error) {
      console.log("Error sending Eth:", error);
    }
  };

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
  testButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 80,
    width: 300,
  },
  testButtonText: {
    color: "white",
    fontSize: 20,
  },
  productList: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 150,
  },
});