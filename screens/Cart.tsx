import React from "react";
import { Context } from "../context/context";
import Text from "../components/Text";
import { StackScreenProps } from "@react-navigation/stack";

const Cart: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  return <Text title="Cart" />;
};

export default Cart;
