import React, { useContext } from "react";
import { Context } from "../context/context";
import Text from "../components/Text";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, FlatList } from "react-native";
import { Header, CartItem, CartSummary } from "../components";
import { width } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";

const Cart: React.FC<BottomTabScreenProps<{}>> = ({ navigation }) => {
  const { cart, colors, cartTotal, manageCart } = useContext(Context);

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Header navigation={navigation} />
      {cart.length === 0 ? (
        <View
          style={{
            ...styles.container,
            backgroundColor: colors.background,
            justifyContent: "center",
          }}
        >
          <Text title="Your cart is empty" />
        </View>
      ) : (
        <>
          <CartSummary
            onPress={() =>
              navigation.navigate("Profile", {
                screen: "Checkout",
              })
            }
          />
          <FlatList
            keyExtractor={(item) => item._id}
            data={cart}
            renderItem={({ item }) => <CartItem data={item} />}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
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
});

export default Cart;
