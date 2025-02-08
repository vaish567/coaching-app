import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "./../constant/Colors";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <Image
        source={require("./../assets/images/landing.png")}
        style={{ width: "100%", height: 300, marginTop: 70 }}
      />
      <View
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 25,
          height: "100%",
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
        <Text style={styles.heading}>Welcome to Coaching App</Text>
        <Text style={styles.description}>
          Transform your ideas into engaging educational content, effortlessly
          with AI! 📚🤖
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity
          onPress={() => router.push("/auth/signIn")}
          style={styles.button}
        >
          <Text style={[styles.buttonText, { color: Colors.PRIMARY }]}>
            Get Started
          </Text>
        </TouchableOpacity>

        {/* Already Have an Account Button */}
        <TouchableOpacity
          onPress={() => router.push("/auth/signUp")}
          style={[styles.button, styles.outlineButton]}
        >
          <Text style={[styles.buttonText, { color: Colors.WHITE }]}>
            Already have an Account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: "center",
    color: Colors.WHITE,
    fontFamily: "figtree-bold",
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "figtree",
    color: Colors.WHITE,
    marginTop: 20,
  },
  button: {
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
  },
  outlineButton: {
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.WHITE,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "figtree",
  },
});
