import React, { useContext } from "react";
import { Context } from "../context/context";
import Text from "../components/Text";
import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet, View, FlatList } from "react-native";
import { Header, CartItem } from "../components";
import { width } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";

const Cart: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  const { cart, colors, cartTotal } = useContext<any>(Context);
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Header navigation={navigation} />
      <View style={styles.cartSummary}>
        <Text title={cartTotal} style={styles.cartTotalText} />
        <RectButton style={styles.button}>
          <Text title="Checkout" style={styles.buttonText} />
        </RectButton>
      </View>
      <FlatList
        keyExtractor={(item) => item._id}
        data={cart}
        renderItem={({ item }) => <CartItem data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    alignSelf: "center",
    alignItems: "center",
  },
  cartSummary: {
    width: width * 0.9,
    height: 160,
    backgroundColor: "#fae3ba",
    borderRadius: 5,
    alignItems: "flex-end",
    paddingRight: 15,
    paddingTop: 15,
    marginBottom: 15,
    justifyContent: "space-between",
  },
  button: {
    width: 160,
    height: 50,
    backgroundColor: "#6f0000",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  buttonText: {
    textTransform: "uppercase",
    fontSize: 18,
    color: "#ffffff",
  },
  cartTotalText: {
    fontSize: 28,
    color: "#000000",
  },
});

export default Cart;
