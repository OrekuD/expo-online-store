import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Context } from "../context/context";
import { width, height } from "../constants/Layout";
import Text from "./Text";
import { RectButton } from "react-native-gesture-handler";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { URL } from "../constants/Url";

interface Props {
  navigation?: any;
  data: {
    name: string;
    price: number;
    productImage: string;
    specification?: string[];
  };
}

const Card: React.FC<Props> = ({ navigation, data }) => {
  const { name, price, productImage, specification } = data;
  return (
    <RectButton
      style={styles.container}
      onPress={() => navigation.navigate("Product", { data })}
    >
      <Image
        source={{ uri: `${URL}/${productImage}` }}
        style={{ height: "100%", width: "100%", borderRadius: 10 }}
        resizeMode="cover"
      />
      <View style={styles.footer}>
        <RectButton style={styles.button}>
          <Ionicons name="ios-heart-empty" color="#121212" size={20} />
        </RectButton>
        <RectButton style={styles.button}>
          <Entypo name="plus" color="#121212" size={22} />
        </RectButton>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: height * 0.55,
    borderRadius: 10,
    marginVertical: 15,
    position: "relative",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "rgba(1, 1, 1, 0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 100,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Card;
