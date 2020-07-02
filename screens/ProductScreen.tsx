import React from "react";
import { Context } from "../context/context";
import Text from "../components/Text";
import { StackScreenProps } from "@react-navigation/stack";

const Product: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  return <Text title="Product" />;
};

export default Product;
