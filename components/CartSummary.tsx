import React, { useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { width } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";
import Text from "./Text";
import { Context } from "../context/context";

interface Props {
  onPress: () => void;
}

const CartSummary: React.FC<Props> = ({ onPress }) => {
  const { cartTotal, manageCart } = useContext(Context);

  const clearCart = () => {
    Alert.alert("Cart", "Are you sure you want to empty your cart?", [
      { text: "Cancel", style: "cancel" },
      { text: "Yes", onPress: () => manageCart("EMPTY") },
    ]);
  };
  return (
    <View style={styles.container}>
      <Text title={cartTotal} style={styles.cartTotalText} />
      <View style={styles.cartButtons}>
        <RectButton onPress={clearCart} style={{ ...styles.button }}>
          <Text title="Clear" style={styles.buttonText} />
        </RectButton>
        <RectButton onPress={onPress} style={{ ...styles.button }}>
          <Text title="Checkout" style={styles.buttonText} />
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 130,
    backgroundColor: "lightslategrey",
    alignItems: "flex-end",
    paddingTop: 15,
    marginBottom: 15,
    justifyContent: "space-between",
  },
  cartButtons: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 140,
    height: 45,
    backgroundColor: "#6f0000",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  buttonText: {
    textTransform: "uppercase",
    fontSize: 16,
    color: "#ffffff",
  },
  cartTotalText: {
    fontSize: 28,
    color: "#ffffff",
    marginRight: 10,
  },
});

export default CartSummary;
