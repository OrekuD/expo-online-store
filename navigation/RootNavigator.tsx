import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, Cart, ProductScreen, ProfileScreen } from "../screens";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { Context } from "../context/context";

const HomeNavigator = createStackNavigator();
const MainNavigator = createDrawerNavigator();
const TabNavigator = createBottomTabNavigator();

// const MainNavigatorScreen: React.FC = () => {
//   return (
//     <MainNavigator.Navigator>
//       <MainNavigator.Screen name="Home" component={HomeNavigatorScreen} />
//       <MainNavigator.Screen name="Cart" component={Cart} />
//       <MainNavigator.Screen name="Profile" component={ProfileScreen} />
//     </MainNavigator.Navigator>
//   );
// };

const TabNavigatorScreen: React.FC = () => {
  const { darkTheme, colors } = useContext(Context);
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { height: 70 },
        tabStyle: { backgroundColor: colors.background },
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
  return (
    <NavigationContainer>
      <TabNavigatorScreen />
    </NavigationContainer>
  );
};

export { RootNavigator };
