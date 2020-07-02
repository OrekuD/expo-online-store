import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, Cart, ProductScreen } from "../screens";

const HomeNavigator = createStackNavigator();
const HomeNavigatorScreen: React.FC = () => {
  return (
    <HomeNavigator.Navigator headerMode="none">
      <HomeNavigator.Screen name="Home" component={HomeScreen} />
      <HomeNavigator.Screen name="Product" component={ProductScreen} />
      <HomeNavigator.Screen name="Cart" component={Cart} />
    </HomeNavigator.Navigator>
  );
};

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeNavigatorScreen />
    </NavigationContainer>
  );
};

export { RootNavigator };
