import React, { useContext } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/context";
import Text from "./Text";
import { width } from "../constants/Layout";
import { TouchableOpacity, RectButton } from "react-native-gesture-handler";

interface Props {
  isSignUp?: boolean;
  navigation: any;
}

const Form: React.FC<Props> = ({ isSignUp, navigation }) => {
  const { colors } = useContext(Context);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.text,
      }}
    >
      {isSignUp && (
        <TextInput
          style={{ ...styles.textInput, color: colors.text }}
          placeholder="Full name"
          placeholderTextColor="grey"
        />
      )}

      <TextInput
        style={{ ...styles.textInput, color: colors.text }}
        placeholder="Email"
        placeholderTextColor="grey"
      />
      <TextInput
        style={{ ...styles.textInput, color: colors.text }}
        placeholder="Password"
        placeholderTextColor="grey"
      />
      {isSignUp && (
        <TextInput
          style={{ ...styles.textInput, color: colors.text }}
          placeholder="Confirm Password"
          placeholderTextColor="grey"
        />
      )}
      {isSignUp ? (
        <RectButton style={{ ...styles.button }}>
          <Text title="Sign up" />
        </RectButton>
      ) : (
        <RectButton style={{ ...styles.button }}>
          <Text title="Sign in" />
        </RectButton>
      )}

      <View style={styles.bottomSection}>
        {isSignUp ? (
          <>
            <Text title="Already have an account?" style={{ fontSize: 18 }} />
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text title="Log in" style={styles.text} />
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text title="Don't have an account?" style={{ fontSize: 20 }} />
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text title="Create one" style={styles.text} />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  textInput: {
    width: width * 0.9,
    height: 50,
    borderRadius: 7,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: "grey",
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 18,
  },
  bottomSection: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    color: "blue",
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default Form;
