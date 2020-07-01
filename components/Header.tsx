import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { width } from "../constants/Layout";

interface Props {
  title: string;
}

const cart = 2;

const Header: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title }}>{title}</Text>
      <View style={styles.cartContainer}>
        {/* <ShoppingCart color="#ffffff" size="14px" /> */}
        <Text style={{ ...styles.cartText }}> Cart: {cart} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    elevation: 2,
  },
  cartContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    textTransform: "uppercase",
    color: "white",
  },
  cartText: {
    fontSize: 16,
    color: "white",
  },
});

export default Header;
