import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { AppImages } from "../../assets/constant";
import { ScreenHeight, ScreenWidth } from "react-native-elements/dist/helpers";
import Colors from "../../resource/theme/color";
import Mixins from "../../resource/mixins/appStyle";
import Fonts from "../../resource/theme/font";
import CustomButton from "../../Components/CustomButton";
const { scaleSize, scaleFont } = Mixins;
const WelcomeScreen = ({ navigation }: any) => {
  return (
    <>
      <ImageBackground
        source={AppImages.splash} // Replace with your local or remote image URL
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.title}>Welcome to Pixy</Text>
            <Text style={styles.subtitle}>
              Join over 10,000 learners over the World and enjoy online
              education!
            </Text>
            <CustomButton
              ColorCodes={[Colors.white(), Colors.white()]}
              title="Create an account"
              textStyle={styles.buttonText}
              onPress={() => {
                navigation.navigate("HomeScreen");
              }}
            />

            <Text style={styles.footerText}>
              Already have an account?{" "}
              <Text
                style={styles.loginText}
                onPress={() => {
                  navigation.navigate("HomeScreen");
                }}
              >
                Log in
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: ScreenWidth,
    height: ScreenHeight,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: scaleSize(20),
  },
  content: {
    gap: scaleSize(15),
  },
  title: {
    fontSize: scaleSize(30),
    fontFamily: Fonts.RobotoBold,
    color: Colors.white(),
    textAlign: "center",
  },
  subtitle: {
    fontSize: scaleFont(18),
    color: Colors.white(),
    textAlign: "center",
    fontFamily: Fonts.RobotoRegular,
  },
  button: {
    backgroundColor: Colors.white(),
    paddingVertical: scaleSize(12),
    paddingHorizontal: scaleSize(40),
    borderRadius: scaleSize(8),
  },
  buttonText: {
    fontSize: scaleFont(20),
    fontFamily: Fonts.RobotoBold,
    color: Colors.black(),
  },
  footerText: {
    color: Colors.white(),
    fontSize: scaleFont(18),
    textAlign: "center",
  },
  loginText: {
    fontSize: scaleFont(18),
    fontFamily: Fonts.RobotoRegular,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default WelcomeScreen;
