import React from "react";
import { View, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RectButton } from "react-native-gesture-handler";
import { Form } from "../components";

const SignIn: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Form navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignIn;
