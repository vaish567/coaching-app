import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import Colors from "./../../constant/Colors";

export default function SignUp() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: 100,
        flex: 1,
        padding: 25,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("./../../assets/images/logo-image.jpeg")}
        style={{ width: 180, height: 180, borderRadius: 20 }}
      />

      <Text style={styles.heading_sign}>Create New Account</Text>

      <TextInput placeholder="Full Name" style={styles.textInput} />
      <TextInput placeholder="Email" style={styles.textInput} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.textInput}
      />

      <TouchableOpacity style={styles.create_account_button}>
        <Text style={styles.create_account_text}>Create Account</Text>
      </TouchableOpacity>

      <View style={{ display: "flex", flexDirection: "row", gap: 5, marginTop: }}>
        <Text>Already have an account?</Text>
        <Pressable>
          <Text>Sign In Here</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading_sign: {
    fontSize: 30,
    fontFamily: "figtree-bold",
    marginTop: 30,
    color: Colors.BLACK,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    marginTop: 20,
    fontSize: 18,
    borderRadius: 8,
  },
  create_account_button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    marginTop: 25,
    width: "100%",
    borderRadius: 10,
  },
  create_account_text: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 500,
    color: Colors.WHITE,
    fontFamily: "figtree",
  },
});
