import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { width } from "../constants/Layout";
import { BorderlessButton } from "react-native-gesture-handler";

interface Props {
  title: string;
  navigation: any;
}

const cart = 2;
const color = "#ffffff";

const Header: React.FC<Props> = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title }}>{title}</Text>
      <View style={styles.cartContainer}>
        <Ionicons
          name="md-cart"
          color={color}
          size={18}
          style={{ marginRight: 3 }}
        />
        <BorderlessButton onPress={() => navigation.navigate("Cart")}>
          <Text style={{ ...styles.cartText }}> Cart : {cart} </Text>
        </BorderlessButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    elevation: 2,
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#ffffff",
    textTransform: "uppercase",
    fontFamily: "JosefinSansR",
  },
  cartText: {
    fontSize: 18,
    color: "#ffffff",
    fontFamily: "JosefinSansR",
  },
});

export default Header;
