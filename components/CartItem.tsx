import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { width } from "../constants/Layout";
import { URL } from "../constants/Url";
import Text from "./Text";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Context } from "../context/context";
import { BorderlessButton } from "react-native-gesture-handler";

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
  const { darkTheme, manageCart } = useContext<any>(Context);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={{ uri: `${URL}/${productImage}` }}
          style={{ height: "85%", width: "40%" }}
          resizeMode="cover"
        />
        <Text title={name} style={styles.nameText} />
      </View>
      <View style={styles.bottom}>
        <Text title={price} style={styles.priceText} />
        <View style={styles.count}>
          <BorderlessButton onPress={() => manageCart("INCREASE", data)}>
            <Entypo name="minus" color="#D3781F" size={26} />
          </BorderlessButton>
          <Text title={count} style={styles.countText} />
          <BorderlessButton onPress={() => manageCart("DECREASE", data)}>
            <Entypo name="plus" color="#D3781F" size={26} />
          </BorderlessButton>
        </View>
        <Text title={total} style={styles.priceText} />
        <BorderlessButton onPress={() => manageCart("REMOVE", data)}>
          <AntDesign
            name="close"
            size={24}
            color={darkTheme ? "#89AF90" : "#AD0000"}
          />
        </BorderlessButton>
      </View>
    </View>
  );
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
  top: {
    height: 200,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  count: {
    flexDirection: "row",
    alignItems: "center",
  },
  countText: {
    marginHorizontal: 15,
    fontSize: 22,
  },
  nameText: {
    fontSize: 26,
  },
  priceText: {
    fontSize: 22,
  },
});

export default CartItem;
