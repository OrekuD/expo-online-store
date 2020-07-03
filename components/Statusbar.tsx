import React, { useContext } from "react";
import { Context } from "../context/context";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar as _StatusBar } from "react-native";

const StatusBar: React.FC = () => {
  const { darkTheme, colors } = useContext<any>(Context);
  return (
    <_StatusBar
      translucent
      barStyle={darkTheme ? "light-content" : "dark-content"}
      backgroundColor={darkTheme ? "#121212" : "#ffffff"}
    />
  );
};

export default StatusBar;
