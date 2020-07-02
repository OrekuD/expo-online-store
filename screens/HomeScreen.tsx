import * as React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Context } from "../context/context";
import { Text, Header, Card } from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { products } from "../data";
// interface Props {
//   navigation:
// }

const HomeScreen: React.FC<StackScreenProps<{}>> = ({ navigation }) => {
  const { colors, products } = React.useContext<any>(Context);
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Header title="Shopapp" navigation={navigation} />
      <View
        style={{
          flex: 1,
          borderRadius: 10,
          overflow: "hidden",
          marginVertical: 10,
        }}
      >
        <FlatList
          data={products}
          showsVerticalScrollIndicator={false}
          keyExtractor={() => Math.random().toString()}
          renderItem={({ item }) => (
            <Card data={item} navigation={navigation} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "yellow",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default HomeScreen;
