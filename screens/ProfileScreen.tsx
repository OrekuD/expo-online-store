import React, { useContext } from "react";
import { View, StyleSheet, Image, Switch } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Context } from "../context/context";

const ProfileScreen: React.FC<BottomTabScreenProps<{}>> = ({ navigation }) => {
  const { darkTheme, colors, toggleTheme } = useContext(Context);

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Image
        source={require("../assets/images/user.png")}
        resizeMode="cover"
        style={styles.image}
      />
      <Switch value={darkTheme} onValueChange={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: "#ffffff",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    backgroundColor: "#ffffff",
  },
});

export default ProfileScreen;
