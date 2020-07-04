import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  Cart,
  ProductScreen,
  ProfileScreen,
  SignIn,
  SignUp,
} from "../screens";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { Context } from "../context/context";

const HomeNavigator = createStackNavigator();
const AccountNavigator = createStackNavigator();
const TabNavigator = createBottomTabNavigator();

const AccountNavigatorScreen: React.FC = () => {
  const { colors, darkTheme } = useContext(Context);
  return (
    <AccountNavigator.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: darkTheme ? "#121212" : "#ffffff" },
        headerTintColor: colors.text,
      }}
    >
      <AccountNavigator.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Sign In" }}
      />
      <AccountNavigator.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Sign Up" }}
      />
    </AccountNavigator.Navigator>
  );
};

const TabNavigatorScreen: React.FC = () => {
  const { darkTheme, colors, tabBar } = useContext(Context);
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { height: 65 },
        tabStyle: {
          backgroundColor: darkTheme ? "#121212" : "#ffffff",
        },
      }}
      screenOptions={{
        tabBarVisible: tabBar,
      }}
    >
      <TabNavigator.Screen
        name="Home"
        component={HomeNavigatorScreen}
        options={{
          tabBarIcon: (props: { focused: boolean; color: string }) => (
            <AntDesign
              name="home"
              color={props.focused ? colors.text : "grey"}
              size={28}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: (props: { focused: boolean; color: string }) => (
            <Ionicons
              name="md-cart"
              color={props.focused ? colors.text : "grey"}
              size={30}
            />
          ),
        }}
      />
      <TabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: (props: { focused: boolean; color: string }) => (
            <MaterialCommunityIcons
              name="account"
              color={props.focused ? colors.text : "grey"}
              size={30}
            />
          ),
        }}
      />
    </TabNavigator.Navigator>
  );
};

const HomeNavigatorScreen: React.FC = () => {
  return (
    <HomeNavigator.Navigator headerMode="none">
      <HomeNavigator.Screen name="Home" component={HomeScreen} />
      <HomeNavigator.Screen name="Product" component={ProductScreen} />
    </HomeNavigator.Navigator>
  );
};

const RootNavigator: React.FC = () => {
  const { isLoggedIn } = useContext(Context);
  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigatorScreen /> : <AccountNavigatorScreen />}
    </NavigationContainer>
  );
};

export { RootNavigator };
