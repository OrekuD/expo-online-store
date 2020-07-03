import React, { useContext } from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { Context } from "../context/context";
import { Text, Header } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { width, height } from "../constants/Layout";
// import { products } from "../data";
import { RectButton } from "react-native-gesture-handler";
import { URL } from "../constants/Url";

const Product: React.FC<StackScreenProps<{}>> = ({
  navigation,
  route: {
    params: { data },
  },
}) => {
  const { colors, manageCart, getProduct } = useContext<any>(Context);
  const { name, price, productImage, specification } = data;
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, backgroundColor: colors.background }}
    >
      <View style={styles.container}>
        <Header title="Shopapp" navigation={navigation} />
        <Image
          source={{ uri: `${URL}/${productImage}` }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.header}>
          <Text title="About product" style={styles.headerText} />
        </View>
        <View style={styles.details}>
          <Text title={name} style={styles.detailsText} />
          <Text title={price} style={styles.detailsText} />
        </View>
        {getProduct(data) ? (
          <RectButton
            onPress={() => manageCart("REMOVE", data)}
            style={styles.button}
          >
            <Text title="remove from cart" style={styles.buttonText} />
          </RectButton>
        ) : (
          <RectButton
            onPress={() => manageCart("ADD", data)}
            style={styles.button}
          >
            <Text title="add to cart" style={styles.buttonText} />
          </RectButton>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: height > 720 ? height * 0.5 : height * 0.7,
    backgroundColor: "red",
    marginVertical: 15,
  },
  header: {
    height: 70,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#fae3ba",
    paddingLeft: 20,
    marginVertical: 10,
  },
  headerText: {
    fontSize: 20,
    color: "#121212",
  },
  details: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  detailsText: {
    fontSize: 20,
  },
  button: {
    width: 180,
    height: 50,
    backgroundColor: "#6f0000",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginVertical: 10,
    marginRight: 20,
  },
  buttonText: {
    textTransform: "uppercase",
    fontSize: 18,
    color: "#ffffff",
  },
});

export default Product;
