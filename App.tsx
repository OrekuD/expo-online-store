import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AppLoading } from "expo";
import Constants from "expo-constants";
import { useFonts } from "@use-expo/font";
import { AppProvider } from "./context/context";
import { RootNavigator } from "./navigation/RootNavigator";
import StatusBar from "./components/Statusbar";

export default function App() {
  let [fontsLoaded] = useFonts({
    JosefinSans: require("./assets/fonts/JosefinSans.ttf"),
    JosefinSansB: require("./assets/fonts/JosefinSans-Bold.ttf"),
    JosefinSansM: require("./assets/fonts/JosefinSans-Medium.ttf"),
    JosefinSansR: require("./assets/fonts/JosefinSans-Regular.ttf"),
    JosefinSansS: require("./assets/fonts/JosefinSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AppProvider>
      <View style={styles.container}>
        <StatusBar />
        <RootNavigator />
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
