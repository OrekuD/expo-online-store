import React, { useContext } from "react";
import { Context } from "../context/context";
import Text from "../components/Text";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, FlatList } from "react-native";
import { Header, CartItem } from "../components";
import { width } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";

const Cart: React.FC<BottomTabScreenProps<{}>> = ({ navigation }) => {
  const { cart, colors, cartTotal, manageCart } = useContext(Context);

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Header navigation={navigation} />
      {cart.length === 0 ? (
        <View
          style={{ ...styles.container, backgroundColor: colors.background }}
        >
          <Text title="Cart is empty" />
        </View>
      ) : (
        <>
          <View style={styles.cartSummary}>
            <Text title={cartTotal} style={styles.cartTotalText} />
            <View style={styles.cartButtons}>
              <RectButton
                onPress={() => manageCart("EMPTY")}
                style={{ ...styles.button }}
              >
                <Text title="Clear" style={styles.buttonText} />
              </RectButton>
              <RectButton
                onPress={() =>
                  navigation.navigate("Profile", {
                    screen: "Checkout",
                  })
                }
                style={{ ...styles.button }}
              >
                <Text title="Checkout" style={styles.buttonText} />
              </RectButton>
            </View>
          </View>
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
  cartSummary: {
    width: width * 0.9,
    height: 130,
    backgroundColor: "#fae3ba",
    borderRadius: 5,
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
    color: "#000000",
  },
});

export default Cart;
