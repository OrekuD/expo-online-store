import React, { useContext, useEffect } from "react";
import { Context } from "../context/context";
import Text from "../components/Text";
import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet, View, FlatList } from "react-native";
import { width } from "../constants/Layout";
import { RectButton } from "react-native-gesture-handler";

const Checkout: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  const { cart, colors, cartTotal, toggleTabBar } = useContext(Context);

  useEffect(() => {
    toggleTabBar(false);

    return () => {
      toggleTabBar(true);
    };
  }, []);

  return (
    <View
      style={{ ...styles.container, backgroundColor: colors.background }}
    ></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Checkout;
