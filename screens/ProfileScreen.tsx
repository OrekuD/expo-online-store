import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Image, Switch, FlatList } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Context } from "../context/context";
import { WishlistItem } from "../components";

const ProfileScreen: React.FC<BottomTabScreenProps<{}>> = ({ navigation }) => {
  const { darkTheme, colors, toggleTheme, wishlist } = useContext(Context);

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Image
        source={require("../assets/images/user.png")}
        resizeMode="cover"
        style={styles.image}
      />
      <Switch value={darkTheme} onValueChange={toggleTheme} />
      <View style={styles.wishlistContainer}>
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <WishlistItem data={item} />}
        />
      </View>
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
  wishlistContainer: {
    width: "100%",
  },
});

export default ProfileScreen;
