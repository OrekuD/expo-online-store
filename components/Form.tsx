import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import { Context } from "../context/context";
import Text from "./Text";
import { width } from "../constants/Layout";
import { TouchableOpacity, RectButton } from "react-native-gesture-handler";
import { validateDetails } from "../util/validateDetails";

interface Props {
  isSignUp?: boolean;
  navigation: any;
}

const Form: React.FC<Props> = ({ isSignUp, navigation }) => {
  const { colors } = useContext(Context);
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const createAccount = (): void => {
    const newUser = {
      fullname,
      email,
      password,
      confirmPassword,
    };

    const { isValid, message } = validateDetails(newUser);
    if (!isValid) {
      Alert.alert("Invalid details", message);
      return;
    }
  };

  const signin = (): void => {
    const userDetails = {
      email,
      password,
    };
    const { isValid, message } = validateDetails(userDetails);
    if (!isValid) {
      Alert.alert("Invalid details", message);
      return;
    }
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.background,
      }}
    >
      {isSignUp && (
        <TextInput
          style={{ ...styles.textInput, color: colors.text }}
          placeholder="Full name"
          placeholderTextColor="grey"
          value={fullname}
          onChangeText={(text) => setFullname(text)}
        />
      )}

      <TextInput
        style={{ ...styles.textInput, color: colors.text }}
        placeholder="Email"
        placeholderTextColor="grey"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={{ ...styles.textInput, color: colors.text }}
        placeholder="Password"
        placeholderTextColor="grey"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {isSignUp && (
        <TextInput
          style={{ ...styles.textInput, color: colors.text }}
          placeholder="Confirm Password"
          placeholderTextColor="grey"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      )}
      {isSignUp ? (
        <RectButton onPress={createAccount} style={{ ...styles.button }}>
          <Text title="Sign up" />
        </RectButton>
      ) : (
        <RectButton onPress={signin} style={{ ...styles.button }}>
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
