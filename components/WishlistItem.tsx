import React, { useContext } from "react";
import { Context } from "../context/context";
import Text from "../components/Text";
import { StyleSheet, View, Image, Alert } from "react-native";
import { width } from "../constants/Layout";
import {
  TouchableOpacity,
  BorderlessButton,
} from "react-native-gesture-handler";
import { ProductProps } from "../types";
import { URL } from "../constants/Url";
import { Entypo, Ionicons } from "@expo/vector-icons";

interface Props {
  data: ProductProps;
}

const WishlistItem: React.FC<Props> = ({ data }) => {
  const { isProductInCart, manageCart, modifyWishlist } = useContext(Context);
  const { name, price, productImage, specification, _id } = data;

  const removeFromWishlist = (product: ProductProps): void => {
    Alert.alert(
      "Wishlist",
      "Are you sure you want to remove product from wishlist?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => modifyWishlist(product) },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={{ uri: `${URL}/${productImage}` }}
          style={{ height: "100%", width: "100%" }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.rightContainer}>
        <View>
          <Text title={name} style={{ ...styles.nameText, ...styles.text }} />
          <View style={styles.tab}>
            <BorderlessButton onPress={() => removeFromWishlist(data)}>
              <Ionicons name="md-heart" color="red" size={20} />
            </BorderlessButton>
            <Text style={styles.text} title={price} />
          </View>
        </View>
        {isProductInCart(data) ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => manageCart("REMOVE", data)}
            style={styles.button}
          >
            <Text style={styles.text} title="Remove from cart" />
            <Entypo name="minus" color="#ffffff" size={22} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            onPress={() => manageCart("ADD", data)}
          >
            <Text style={styles.text} title="Add to cart" />
            <Entypo name="plus" color="#ffffff" size={22} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 120,
    marginBottom: 15,
    alignSelf: "center",
    flexDirection: "row",
  },
  leftContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rightContainer: {
    flex: 2,
    backgroundColor: "lightslategray",
    justifyContent: "space-between",
    paddingHorizontal: 7,
  },
  button: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  text: {
    color: "#ffffff",
  },
  nameText: {
    fontSize: 18,
    marginBottom: 5,
    alignSelf: "flex-end",
  },
  tab: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default WishlistItem;
