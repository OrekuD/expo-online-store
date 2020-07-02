import React, { useContext } from "react";
import { Text as _Text, StyleSheet } from "react-native";
import { Context } from "../context/context";

interface Props {
  title: string | number;
  style?: object;
}

const Text: React.FC<Props> = ({ title, style }) => {
  const { colors } = useContext<any>(Context);

  return (
    <_Text style={{ ...styles.text, color: colors.text, ...style }}>
      {title}
    </_Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "JosefinSansR",
  },
});

export default Text;
