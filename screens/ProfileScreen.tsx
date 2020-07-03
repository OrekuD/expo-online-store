import React from "react";
import { View, StyleSheet } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

const ProfileScreen: React.FC<BottomTabScreenProps<{}>> = ({ navigation }) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileScreen;
