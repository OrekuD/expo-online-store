import React from "react";
import { View, StyleSheet } from "react-native";
import { width } from "../constants/Layout";

interface Props {
  data: {
    _id: string;
    name: string;
    price: number;
    productImage: string;
    specification?: string;
    count: number;
    total: number;
  };
}

const CartItem: React.FC<Props> = ({ data }) => {
  const { name, price, productImage, count, total } = data;
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 280,
    marginVertical: 10,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderRadius: 5,
    borderColor: "grey",
  },
});

export default CartItem;
