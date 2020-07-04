import React, { useContext } from "react";
import { Context } from "../context/context";
import Text from "../components/Text";
import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet, View, FlatList } from "react-native";
import { width } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";

const Wishlist: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  const { cart, colors, cartTotal } = useContext(Context);
  return <View></View>;
};

const styles = StyleSheet.create({});

export default Wishlist;
