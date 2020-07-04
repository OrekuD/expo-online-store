import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Image, Switch, FlatList } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Context } from "../context/context";
import { WishlistItem, Text } from "../components";
import { width } from "../constants/Layout";

const ProfileScreen: React.FC<BottomTabScreenProps<{}>> = ({ navigation }) => {
  const { darkTheme, colors, toggleTheme, wishlist, userDetails } = useContext(
    Context
  );
  const { fullname, email, image } = userDetails;

  const wishlistHeader = () => (
    <View style={styles.wishlistHeaderContainer}>
      <Text title="Wishlist" style={styles.wishlistHeaderText} />
    </View>
  );

  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <View style={styles.topContainer}>
        <Image
          source={require("../assets/images/user.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.topContainerRight}>
          <View>
            <Text title={fullname} style={styles.profileText} />
            <Text title={email} style={styles.emailText} />
          </View>
          <View style={styles.darkTheme}>
            <Text title="Dark theme" style={styles.darkThemeText} />
            <Switch value={darkTheme} onValueChange={toggleTheme} />
          </View>
        </View>
      </View>
      <View style={styles.wishlistContainer}>
        {wishlist.length > 0 && (
          <FlatList
            data={wishlist}
            ListHeaderComponent={wishlistHeader}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <WishlistItem data={item} />}
          />
        )}
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
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: "#ffffff",
  },
  topContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  topContainerRight: {
    width: "50%",
    paddingLeft: 40,
    justifyContent: "space-between",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    backgroundColor: "#ffffff",
  },
  wishlistContainer: {
    width: "100%",
  },
  wishlistHeaderContainer: {
    width: width * 0.9,
    paddingLeft: 20,
    height: 50,
    justifyContent: "center",
    backgroundColor: "#6f0000",
    alignSelf: "center",
    marginVertical: 10,
  },
  wishlistHeaderText: {
    fontSize: 22,
    color: "#ffffff",
  },
  profileText: {
    fontSize: 24,
  },
  emailText: {
    color: "grey",
  },
  darkThemeText: {
    fontSize: 20,
    marginBottom: 5,
  },
  darkTheme: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ProfileScreen;
