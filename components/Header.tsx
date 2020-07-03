import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { width } from "../constants/Layout";
import { BorderlessButton } from "react-native-gesture-handler";
import { Context } from "../context/context";

interface Props {
  title?: string;
  navigation?: any;
}

const Header: React.FC<Props> = ({ title, navigation }) => {
  const { cart, colors, darkTheme } = useContext(Context);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? "#121212" : "#ffffff",
      }}
    >
      <Text style={{ ...styles.title, color: colors.text }}>Shopapp</Text>
      <View style={styles.cartContainer}>
        <Ionicons
          name="md-cart"
          color={colors.text}
          size={18}
          style={{ marginRight: 3 }}
        />
        <BorderlessButton onPress={() => navigation.navigate("Cart")}>
          <Text style={{ ...styles.cartText, color: colors.text }}>
            Cart : {cart.length}
          </Text>
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
    paddingHorizontal: width * 0.05,
    elevation: 2,
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
    fontFamily: "JosefinSansR",
  },
  cartText: {
    fontSize: 18,
    fontFamily: "JosefinSansR",
  },
});

export default Header;
